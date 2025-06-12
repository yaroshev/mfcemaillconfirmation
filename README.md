# MFC Email Confirmation Frontend

A beautiful, responsive email confirmation page for the MFC Management System.

## Features

- ✨ Modern, gradient design matching your app
- 📱 Mobile-responsive layout
- 🔄 Loading states and animations
- ✅ Success/error state handling
- 🎯 Deep link integration to open your app
- 🚀 Optimized for Netlify deployment

## Deployment Instructions

### 1. Push to GitHub

```bash
# Initialize git repository
cd email-frontend
git init
git add .
git commit -m "Initial email frontend"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/mfc-email-frontend.git
git push -u origin main
```

### 2. Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Select the `email-frontend` repository
5. Deploy settings:
   - **Build command**: (leave empty)
   - **Publish directory**: `.`
6. Click "Deploy site"

### 3. Get Your Domain

After deployment, you'll get a URL like: `https://brilliant-unicorn-123456.netlify.app`

### 4. Update Supabase Configuration

Update your Supabase `site_url` to point to your Netlify domain instead of localhost.

## Customization

- Update colors in the CSS to match your brand
- Modify the deep link URL (`mfc://login`) if needed
- Add your support email address
- Customize success/error messages

## Testing

Visit your deployed URL with test parameters:
```
https://your-site.netlify.app/?token=test&type=signup
```

The page will show a success state after 2 seconds for testing purposes. 