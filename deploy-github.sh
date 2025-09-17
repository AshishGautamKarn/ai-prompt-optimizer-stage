#!/bin/bash

# AI Prompt Optimizer - GitHub Deployment Script
# This script prepares your files for GitHub Pages deployment

echo "🚀 AI Prompt Optimizer - GitHub Deployment Preparation"
echo "====================================================="

# Create GitHub deployment directory
echo "📁 Creating GitHub deployment directory..."
mkdir -p github-deploy

# Copy required files
echo "📋 Copying required files..."
cp deploy/index.html github-deploy/
cp deploy/styles.css github-deploy/
cp deploy/script.js github-deploy/
cp deploy/README.md github-deploy/
cp deploy/FEATURES.md github-deploy/
cp deploy/package.json github-deploy/

# Create CNAME file for custom domain (optional)
echo "📝 Creating CNAME file for custom domain..."
echo "# Add your custom domain here (e.g., yourdomain.com)" > github-deploy/CNAME.example

# Create .gitignore file
echo "📝 Creating .gitignore file..."
cat > github-deploy/.gitignore << 'EOF'
# Ignore system files
.DS_Store
Thumbs.db

# Ignore IDE files
.vscode/
.idea/
*.swp
*.swo

# Ignore temporary files
*.tmp
*.log
EOF

# Show deployment instructions
echo ""
echo "✅ GitHub deployment files prepared in 'github-deploy/' directory"
echo ""
echo "🌐 Choose your deployment method:"
echo ""
echo "1. 🌟 GitHub Web Interface (Easiest):"
echo "   - Go to https://github.com"
echo "   - Create new repository: 'ai-prompt-optimizer'"
echo "   - Upload all files from 'github-deploy/' folder"
echo "   - Go to Settings → Pages"
echo "   - Source: 'Deploy from a branch'"
echo "   - Branch: 'main'"
echo "   - Your site will be at: https://yourusername.github.io/ai-prompt-optimizer"
echo ""
echo "2. ⚡ Git Command Line:"
echo "   - cd github-deploy"
echo "   - git init"
echo "   - git add ."
echo "   - git commit -m 'Deploy AI Prompt Optimizer'"
echo "   - git remote add origin https://github.com/YOUR_USERNAME/ai-prompt-optimizer.git"
echo "   - git branch -M main"
echo "   - git push -u origin main"
echo ""
echo "3. 🖥️ GitHub Desktop:"
echo "   - Open GitHub Desktop"
echo "   - File → New Repository"
echo "   - Choose 'github-deploy/' folder"
echo "   - Publish to GitHub"
echo "   - Enable Pages in repository settings"
echo ""
echo "📁 Files in github-deploy directory:"
ls -la github-deploy/

echo ""
echo "🎉 Ready for GitHub Pages deployment!"
echo ""
echo "📋 Next Steps:"
echo "1. Choose your deployment method above"
echo "2. Create GitHub repository"
echo "3. Upload files"
echo "4. Enable GitHub Pages"
echo "5. Share your live URL!"
echo ""
echo "🔗 Your site will be available at:"
echo "https://yourusername.github.io/ai-prompt-optimizer"
