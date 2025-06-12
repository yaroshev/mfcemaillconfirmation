# MFC Email Confirmation Frontend

A beautiful, responsive email confirmation page for **Madness Forming & Construction Inc.** that matches the company's brand identity.

## 🎨 Brand Features

- **Black background** with white text matching the MFC app design
- **MFC logo box** with company name in the signature style
- **Modern gradient buttons** with iOS-style design language
- **Professional contact information** for New Westminster location
- **Mobile-first responsive design** that works on all devices

## 🚀 Live Deployment

**Production URL:** [https://mfc-inc.netlify.app/](https://mfc-inc.netlify.app/)

## 📱 Features

### Visual Design
- Matches MFC mobile app branding exactly
- Black background with white text and accent colors
- Professional logo presentation with company tagline
- Smooth animations and modern UI elements

### Functionality
- **Email confirmation handling** with loading, success, and error states
- **Deep linking** to MFC mobile app (`mfc://login`)
- **Mobile optimization** with automatic app opening on mobile devices
- **Error handling** with helpful user messages
- **Contact integration** with clickable phone and email links

### States Handled
1. **Loading State**: Shows while processing confirmation
2. **Success State**: Email confirmed successfully
3. **Error State**: Various error scenarios with specific messages

## 🏢 Company Information

**Madness Forming & Construction Inc.**
- **Address:** 1-413 Thirteenth St. BC, V3M 4L5, New Westminster, BC
- **Phone:** [+1 604 440 0362](tel:+16044400362)
- **Email:** [info@madnessinc.ca](mailto:info@madnessinc.ca)
- **Tagline:** "Building Dreams with Quality & Safety"

## 🔧 Technical Details

### URL Parameters Supported
- `token`: Email confirmation token
- `type`: Confirmation type (e.g., 'signup')
- `error`: Error code from Supabase
- `error_description`: Detailed error message

### Mobile Deep Linking
- **iOS/Android:** Automatically attempts to open `mfc://login`
- **Fallback:** Offers to contact support if app can't be opened
- **Web browsers:** Shows contact support option

## 📦 Deployment

### Netlify (Current)
The site is deployed on Netlify with automatic deployments from the GitHub repository.

### Manual Deployment
```bash
# Deploy to Netlify
./deploy.sh

# Or manually upload the files to any static hosting service
```

## 🎯 Integration with MFC System

This frontend integrates with:
- **Supabase Auth**: Handles email confirmation tokens
- **MFC Mobile App**: Deep linking for seamless user experience  
- **Email Service**: Processes confirmation and welcome emails
- **Admin Dashboard**: Manages user access requests

## 🔄 Customization

To customize for different environments:

1. **Update contact information** in `index.html`
2. **Modify brand colors** in the CSS variables
3. **Change deep link scheme** from `mfc://` to your app's scheme
4. **Update company information** and tagline as needed

## 📱 Mobile Experience

The page is optimized for mobile devices with:
- **Touch-friendly buttons** with proper sizing
- **Responsive layout** that adapts to screen size
- **Automatic app launching** on mobile devices
- **Fallback options** when the app isn't installed

---

**Built for Madness Forming & Construction Inc.**  
*Professional construction management solutions*

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