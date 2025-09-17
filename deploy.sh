#!/bin/bash

# AI Prompt Optimizer - Deployment Script
# This script prepares your files for deployment to various hosting providers

echo "🚀 AI Prompt Optimizer - Deployment Preparation"
echo "=============================================="

# Create deployment directory
echo "📁 Creating deployment directory..."
mkdir -p deploy

# Copy required files
echo "📋 Copying required files..."
cp index.html deploy/
cp styles.css deploy/
cp script.js deploy/
cp README.md deploy/ 2>/dev/null || echo "⚠️  README.md not found, skipping..."

# Copy optional files
echo "📋 Copying optional files..."
cp FEATURES.md deploy/ 2>/dev/null || echo "⚠️  FEATURES.md not found, skipping..."
cp package.json deploy/ 2>/dev/null || echo "⚠️  package.json not found, skipping..."

# Create a simple index.html for deployment (if needed)
echo "📝 Creating deployment index.html..."
cat > deploy/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Prompt Optimizer</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header>
            <h1><i class="fas fa-robot"></i> AI Prompt Optimizer</h1>
            <p>Generate optimized prompts for various AI platforms</p>
        </header>

        <div class="progress-container">
            <div class="progress-bar" id="progressBar"></div>
            <div class="progress-text" id="progressText">Step 1 of 5</div>
        </div>

        <div class="question-container" id="questionContainer">
            <!-- Questions will be dynamically loaded here -->
        </div>

        <div class="navigation" id="navigation">
            <button id="prevBtn" class="btn btn-outline">
                <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button id="nextBtn" class="btn btn-primary">
                Next <i class="fas fa-arrow-right"></i>
            </button>
            <button id="generateBtn" class="btn btn-success" style="display: none;">
                <i class="fas fa-magic"></i> Generate Prompt
            </button>
        </div>

        <div class="result-container" id="resultContainer" style="display: none;">
            <h2><i class="fas fa-sparkles"></i> Your Optimized Prompt</h2>
            <div class="prompt-output">
                <textarea id="generatedPrompt" readonly></textarea>
                <button id="copyBtn" class="btn btn-outline">
                    <i class="fas fa-copy"></i> Copy to Clipboard
                </button>
            </div>
            <div class="ai-tips" id="aiTips">
                <!-- AI-specific tips will be shown here -->
            </div>
            <div class="result-actions">
                <button id="newPromptBtn" class="btn btn-primary">
                    <i class="fas fa-plus"></i> Start New Prompt
                </button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>

    <footer class="footer">
        <div class="footer-content">
            <p>Created and Managed by: <strong>Ashish Gautam</strong></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ashishgautamkarn/" target="_blank" rel="noopener noreferrer">@ashishgautamkarn</a></p>
        </div>
    </footer>
</body>
</html>
EOF

# Show deployment options
echo ""
echo "✅ Deployment files prepared in 'deploy/' directory"
echo ""
echo "🌐 Choose your deployment method:"
echo ""
echo "1. 🌟 Netlify (Recommended - Drag & Drop):"
echo "   - Go to https://netlify.com"
echo "   - Drag the 'deploy' folder to the deploy area"
echo "   - Get instant live URL!"
echo ""
echo "2. ⚡ Vercel (CLI):"
echo "   - npm install -g vercel"
echo "   - cd deploy && vercel --prod"
echo ""
echo "3. 🐙 GitHub Pages:"
echo "   - Create GitHub repository"
echo "   - Upload 'deploy' folder contents"
echo "   - Enable GitHub Pages in settings"
echo ""
echo "4. 🚀 Surge.sh (CLI):"
echo "   - npm install -g surge"
echo "   - cd deploy && surge"
echo ""
echo "📁 Files in deploy directory:"
ls -la deploy/

echo ""
echo "🎉 Ready to deploy! Choose your preferred method above."
