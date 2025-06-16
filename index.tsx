<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MFC – Set Your Password</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
           margin:0;display:flex;align-items:center;justify-content:center;height:100vh;
           background:#f4f5f7; }
    .card { background:#fff;padding:2rem;border-radius:8px;
            box-shadow:0 2px 10px rgba(0,0,0,0.08);width:100%;max-width:400px; }
    h1 { margin:0 0 1rem;text-align:center;font-size:1.5rem; }
    input { width:100%;padding:.75rem;margin:.5rem 0;border:1px solid #ccc;
            border-radius:6px;font-size:1rem; }
    button { width:100%;padding:.75rem;margin-top:1rem;background:#0070f3;
             color:#fff;border:none;border-radius:6px;font-size:1rem;
             cursor:pointer; }
    #status { margin-top:.75rem;text-align:center;color:#e00; }
    .success { color:#080; }
    .hidden { display:none; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Set Your Password</h1>
    <form id="pw-form" class="hidden">
      <input type="password" id="pw" placeholder="New password (min 8 chars)" required minlength="8">
      <input type="password" id="pw2" placeholder="Confirm password" required minlength="8">
      <button type="submit">Save Password</button>
    </form>
    <p id="status"></p>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script>
    const SUPABASE_URL  = 'https://bpnwodgubpmhhkpoygip.supabase.co';
    const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwbndvZGd1YnBtaGhrcG95Z2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjc4NDgsImV4cCI6MjA2Mjg0Mzg0OH0.5Qobz9DDYdZifml0saDu8aEMgXwTP8sAczotl1JrKpQ';
    const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

    const $form   = document.getElementById('pw-form');
    const $status = document.getElementById('status');

    (async () => {
      let session = null;

      // 1) PKCE invite link fallback: ?code=...
      const search = new URLSearchParams(location.search);
      const code   = search.get('code');
      if (code) {
        const { data, error } = await sb.auth.exchangeCodeForSession(code);
        if (error) {
          $status.textContent = error.message || 'Invalid or expired code.';
          return;
        }
        session = data.session;
        history.replaceState({}, '', location.pathname);
      } else {
        // 2) Supabase verify redirect: #access_token=…
        const hash = Object.fromEntries(new URLSearchParams(location.hash.slice(1)));
        if (hash.error) {
          $status.textContent = hash.error_description || 'Invalid or expired link.';
          return;
        }
        if (hash.access_token && hash.refresh_token) {
          const { error } = await sb.auth.setSession({
            access_token:  hash.access_token,
            refresh_token: hash.refresh_token
          });
          if (error) {
            $status.textContent = error.message || 'Session setup failed.';
            return;
          }
          session = true;
          history.replaceState({}, '', location.pathname);
        }
      }

      if (!session) {
        $status.textContent = 'Unauthorized access. Use the link in your email.';
        return;
      }

      // Show password form
      $form.classList.remove('hidden');
    })();

    // Handle password save
    $form.addEventListener('submit', async e => {
      e.preventDefault();
      const pw1 = document.getElementById('pw').value.trim();
      const pw2 = document.getElementById('pw2').value.trim();
      if (pw1 !== pw2) {
        $status.textContent = 'Passwords do not match.';
        return;
      }
      const { error } = await sb.auth.updateUser({ password: pw1 });
      if (error) {
        $status.textContent = error.message;
      } else {
        $status.classList.add('success');
        $status.textContent = '✅ Password set! Redirecting…';
        setTimeout(() => location.href = '/', 1500);
      }
    });
  </script>
</body>
</html>
