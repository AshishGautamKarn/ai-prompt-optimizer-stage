# AI Prompt Optimizer

A comprehensive web application that helps developers and ServiceNow users generate the best possible prompts for various AI platforms. The tool guides users through a series of questions to create optimized prompts tailored to their specific AI platform and use case.

## Features

- **Multi-Platform Support**: Optimized for 9+ top AI platforms including ChatGPT, Claude, Gemini, GitHub Copilot, Cursor, Perplexity, Bard, and ServiceNow AI
- **Intelligent Question Flow**: 6-step guided process that adapts based on user selections
- **Platform-Specific Best Practices**: Each AI platform has tailored optimization strategies
- **Multiple Task Types**: Support for coding, analysis, creative writing, business strategy, learning, and problem-solving
- **Flexible Output Formats**: Choose from step-by-step instructions, code examples, structured data, and more
- **Context-Aware**: Considers experience level, project context, constraints, and preferences
- **Modern UI**: Responsive design with smooth animations and intuitive user experience

## Supported AI Platforms

1. **ChatGPT (OpenAI)** - Conversational AI with broad capabilities
2. **Claude (Anthropic)** - Advanced reasoning and analysis
3. **Gemini (Google)** - Multimodal AI with strong reasoning
4. **GitHub Copilot** - AI pair programmer for developers
5. **GitHub Copilot X** - Advanced AI coding assistant
6. **Cursor AI** - AI-powered code editor
7. **Perplexity AI** - Research-focused AI with citations
8. **Bard (Google)** - Google's conversational AI
9. **ServiceNow AI** - Enterprise AI for ServiceNow platform

## How It Works

1. **Select AI Platform**: Choose from 9+ supported AI platforms
2. **Define Task Type**: Specify whether you're coding, analyzing, creating, etc.
3. **Set Complexity Level**: Simple to expert-level tasks
4. **Choose Output Format**: Step-by-step, code examples, structured data, etc.
5. **Add Context**: Experience level, project context, constraints, preferences
6. **Specify Requirements**: Any additional requirements or constraints
7. **Generate Optimized Prompt**: Get a tailored prompt optimized for your chosen AI

## Installation & Usage

### Option 1: Direct File Access
1. Download all files to a local directory
2. Open `index.html` in a web browser
3. No additional setup required!

### Option 2: Local Server (Recommended)
1. Clone or download the repository
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have it installed)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Option 3: Deploy to Web
1. Upload all files to your web server
2. Access via your domain

## File Structure

```
ai-prompt-optimizer/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript application logic
└── README.md           # This documentation
```

## Key Features Explained

### Platform-Specific Optimization
Each AI platform has unique strengths and best practices:
- **ChatGPT**: Conversational, step-by-step approach
- **Claude**: Detailed reasoning and analysis
- **Gemini**: Research-backed responses with citations
- **Copilot**: Code-focused with context awareness
- **ServiceNow**: Enterprise standards and governance

### Intelligent Question Flow
The tool adapts its questions based on your selections:
- AI platform choice determines optimization strategies
- Task type influences prompt structure
- Complexity level affects detail requirements
- Output format preferences shape the final prompt

### Context Awareness
Considers multiple factors for better results:
- Your experience level
- Project context and background
- Time and resource constraints
- Communication preferences
- Target audience
- Success criteria

## Customization

### Adding New AI Platforms
1. Edit the `initializeAIPlatforms()` method in `script.js`
2. Add platform details including name, tips, and best practices
3. Update the `getAISpecificOptimizations()` method with platform-specific guidance

### Modifying Questions
1. Edit the `initializeQuestions()` method in `script.js`
2. Add, remove, or modify questions as needed
3. Update the prompt generation logic accordingly

### Styling Changes
1. Modify `styles.css` for visual changes
2. The design is fully responsive and uses CSS Grid/Flexbox
3. Color scheme and fonts can be easily customized

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include browser and platform information

## Future Enhancements

- [ ] Save and load prompt templates
- [ ] Export prompts in different formats
- [ ] Integration with popular AI platforms
- [ ] Prompt performance analytics
- [ ] Collaborative prompt sharing
- [ ] Advanced prompt templates
- [ ] Multi-language support
