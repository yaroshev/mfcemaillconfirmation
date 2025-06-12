#!/bin/bash
# MFC Email Frontend Deployment Script

echo "🚀 Preparing MFC Email Frontend for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Email confirmation frontend"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "2. Repository name suggestion: 'mfc-email-frontend'"
echo "3. Run these commands:"
echo "   git remote add origin https://github.com/YOURUSERNAME/mfc-email-frontend.git"
echo "   git push -u origin main"
echo ""
echo "4. Deploy to Netlify:"
echo "   - Go to https://netlify.com"
echo "   - Click 'Add new site' → 'Import an existing project'"
echo "   - Connect your GitHub repository"
echo "   - Deploy settings: Build command: (empty), Publish directory: ."
echo ""
echo "5. Update Supabase config with your Netlify URL:"
echo "   Replace 'https://mfc-email-frontend.netlify.app' with your actual URL"
echo ""
echo "🎉 Email frontend ready for deployment!" 