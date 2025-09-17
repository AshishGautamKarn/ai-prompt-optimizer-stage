// AI Prompt Optimizer - Main JavaScript File

class AIPromptOptimizer {
    constructor() {
        this.currentStep = 0;
        this.answers = {};
        this.aiPlatforms = this.initializeAIPlatforms();
        this.questions = this.initializeQuestions();
        this.init();
    }

    initializeAIPlatforms() {
        return {
            'chatgpt': {
                name: 'ChatGPT (OpenAI)',
                icon: 'fas fa-comments',
                description: 'Most popular conversational AI',
                tips: [
                    'Be specific and detailed in your requests',
                    'Use clear role definitions (e.g., "You are an expert...")',
                    'Break complex tasks into smaller steps',
                    'Provide context and examples when possible',
                    'Use structured formatting for better responses',
                    'Ask for step-by-step explanations when needed'
                ],
                bestPractices: {
                    roleDefinition: 'Always start with a clear role definition',
                    context: 'Provide relevant background information',
                    examples: 'Include specific examples when possible',
                    format: 'Specify the desired output format',
                    constraints: 'Mention any limitations or requirements'
                }
            },
            'claude': {
                name: 'Claude (Anthropic)',
                icon: 'fas fa-brain',
                description: 'Advanced reasoning and analysis',
                tips: [
                    'Claude excels at complex reasoning tasks',
                    'Be explicit about your thought process requirements',
                    'Use structured prompts with clear sections',
                    'Ask for detailed explanations and justifications',
                    'Leverage Claude\'s strength in analysis and synthesis',
                    'Provide clear success criteria for your task'
                ],
                bestPractices: {
                    roleDefinition: 'Define the expert role clearly',
                    reasoning: 'Ask for step-by-step reasoning',
                    analysis: 'Request detailed analysis and insights',
                    examples: 'Provide concrete examples and use cases',
                    verification: 'Ask for verification of key points'
                }
            },
            'gemini': {
                name: 'Gemini (Google)',
                icon: 'fas fa-gem',
                description: 'Multimodal AI with strong reasoning',
                tips: [
                    'Gemini works well with multimodal inputs',
                    'Be specific about the type of analysis needed',
                    'Use clear, structured prompts',
                    'Leverage its strength in research and fact-checking',
                    'Ask for multiple perspectives on complex topics',
                    'Request citations and sources when relevant'
                ],
                bestPractices: {
                    roleDefinition: 'Clearly define the expert role',
                    research: 'Ask for research-backed responses',
                    sources: 'Request citations and references',
                    analysis: 'Specify the depth of analysis needed',
                    verification: 'Ask for fact-checking and verification'
                }
            },
            'copilot': {
                name: 'GitHub Copilot',
                icon: 'fas fa-code',
                description: 'AI pair programmer for developers',
                tips: [
                    'Be specific about programming language and framework',
                    'Provide context about your codebase and architecture',
                    'Use clear comments to guide the AI',
                    'Break down complex functions into smaller parts',
                    'Specify coding standards and conventions',
                    'Ask for explanations of generated code'
                ],
                bestPractices: {
                    language: 'Specify programming language clearly',
                    context: 'Provide relevant code context',
                    standards: 'Mention coding standards and conventions',
                    testing: 'Ask for test cases and validation',
                    documentation: 'Request inline documentation'
                }
            },
            'copilot-x': {
                name: 'GitHub Copilot X',
                icon: 'fas fa-code-branch',
                description: 'Advanced AI coding assistant',
                tips: [
                    'Use natural language to describe complex requirements',
                    'Provide architectural context and patterns',
                    'Ask for code reviews and improvements',
                    'Request explanations of complex algorithms',
                    'Specify performance and security requirements',
                    'Ask for alternative implementations'
                ],
                bestPractices: {
                    architecture: 'Describe system architecture clearly',
                    patterns: 'Specify design patterns to use',
                    performance: 'Mention performance requirements',
                    security: 'Include security considerations',
                    testing: 'Request comprehensive test coverage'
                }
            },
            'cursor': {
                name: 'Cursor AI',
                icon: 'fas fa-mouse-pointer',
                description: 'AI-powered code editor',
                tips: [
                    'Use natural language for code generation',
                    'Provide clear context about your project',
                    'Ask for refactoring suggestions',
                    'Request code optimization and improvements',
                    'Specify coding patterns and conventions',
                    'Ask for debugging help with specific errors'
                ],
                bestPractices: {
                    context: 'Provide comprehensive project context',
                    patterns: 'Specify coding patterns and conventions',
                    optimization: 'Ask for performance optimizations',
                    debugging: 'Provide specific error messages',
                    refactoring: 'Request clean, maintainable code'
                }
            },
            'perplexity': {
                name: 'Perplexity AI',
                icon: 'fas fa-search',
                description: 'Research-focused AI with citations',
                tips: [
                    'Ask research-oriented questions',
                    'Request specific sources and citations',
                    'Use current events and recent information',
                    'Ask for multiple perspectives on topics',
                    'Request fact-checking and verification',
                    'Specify the depth of research needed'
                ],
                bestPractices: {
                    research: 'Frame questions as research queries',
                    sources: 'Ask for credible sources and citations',
                    current: 'Request up-to-date information',
                    verification: 'Ask for fact-checking and verification',
                    perspectives: 'Request multiple viewpoints'
                }
            },
            'bard': {
                name: 'Bard (Google)',
                icon: 'fas fa-robot',
                description: 'Google\'s conversational AI',
                tips: [
                    'Be conversational and natural in your prompts',
                    'Ask follow-up questions for clarification',
                    'Request creative and innovative solutions',
                    'Use Bard\'s strength in creative writing',
                    'Ask for multiple options and alternatives',
                    'Request explanations in simple terms'
                ],
                bestPractices: {
                    conversation: 'Use natural, conversational language',
                    creativity: 'Leverage creative problem-solving',
                    alternatives: 'Ask for multiple solution options',
                    simplicity: 'Request explanations in simple terms',
                    followup: 'Plan for follow-up questions'
                }
            },
            'servicenow': {
                name: 'ServiceNow AI',
                icon: 'fas fa-cogs',
                description: 'Enterprise AI for ServiceNow platform',
                tips: [
                    'Be specific about ServiceNow modules and tables',
                    'Include relevant business context and requirements',
                    'Specify security and compliance requirements',
                    'Ask for best practices and governance',
                    'Request code that follows ServiceNow standards',
                    'Include performance and scalability considerations'
                ],
                bestPractices: {
                    modules: 'Specify ServiceNow modules and tables',
                    business: 'Include business context and requirements',
                    security: 'Mention security and compliance needs',
                    governance: 'Ask for governance best practices',
                    performance: 'Consider performance and scalability',
                    standards: 'Follow ServiceNow coding standards'
                }
            }
        };
    }

    initializeQuestions() {
        return [
            {
                id: 'ai_platform',
                title: 'Which AI platform are you using?',
                description: 'Select the AI platform you want to optimize your prompt for. Each platform has unique strengths and best practices.',
                type: 'radio',
                options: Object.keys(this.aiPlatforms).map(key => ({
                    value: key,
                    label: this.aiPlatforms[key].name,
                    description: this.aiPlatforms[key].description,
                    icon: this.aiPlatforms[key].icon
                }))
            },
            {
                id: 'task_type',
                title: 'What type of task are you working on?',
                description: 'Understanding your task type helps us optimize the prompt structure and approach.',
                type: 'radio',
                options: [
                    { value: 'coding', label: 'Coding & Development', description: 'Writing, debugging, or reviewing code' },
                    { value: 'analysis', label: 'Data Analysis & Research', description: 'Analyzing data, research, or information' },
                    { value: 'creative', label: 'Creative Writing', description: 'Content creation, storytelling, or creative tasks' },
                    { value: 'business', label: 'Business & Strategy', description: 'Business analysis, planning, or strategy' },
                    { value: 'learning', label: 'Learning & Education', description: 'Explaining concepts, tutoring, or teaching' },
                    { value: 'problem_solving', label: 'Problem Solving', description: 'Troubleshooting, optimization, or complex problem solving' },
                    { value: 'other', label: 'Other', description: 'Specify your task type' }
                ]
            },
            {
                id: 'complexity',
                title: 'How complex is your task?',
                description: 'The complexity level helps determine the level of detail needed in your prompt.',
                type: 'radio',
                options: [
                    { value: 'simple', label: 'Simple', description: 'Straightforward task with clear requirements' },
                    { value: 'moderate', label: 'Moderate', description: 'Some complexity, may require multiple steps' },
                    { value: 'complex', label: 'Complex', description: 'Highly complex, requires detailed planning and execution' },
                    { value: 'expert', label: 'Expert Level', description: 'Advanced task requiring deep expertise and analysis' }
                ]
            },
            {
                id: 'output_format',
                title: 'What format do you want for the output?',
                description: 'Specifying the desired output format helps the AI provide more useful results.',
                type: 'checkbox',
                options: [
                    { value: 'step_by_step', label: 'Step-by-step instructions', description: 'Detailed, sequential guidance' },
                    { value: 'code_examples', label: 'Code examples', description: 'Working code samples and snippets' },
                    { value: 'explanations', label: 'Detailed explanations', description: 'In-depth explanations and reasoning' },
                    { value: 'bullet_points', label: 'Bullet points', description: 'Concise, organized bullet points' },
                    { value: 'structured_data', label: 'Structured data', description: 'Tables, lists, or organized data' },
                    { value: 'creative_format', label: 'Creative format', description: 'Story, dialogue, or creative presentation' }
                ]
            },
            {
                id: 'context_details',
                title: 'What context should the AI know about?',
                description: 'Select the types of context you want to provide. We\'ll ask specific questions for each selected option.',
                type: 'checkbox',
                options: [
                    { value: 'experience_level', label: 'Your experience level', description: 'Beginner, intermediate, or expert' },
                    { value: 'project_context', label: 'Project context', description: 'Background about your project or work' },
                    { value: 'constraints', label: 'Constraints and limitations', description: 'Time, budget, or technical constraints' },
                    { value: 'preferences', label: 'Style preferences', description: 'Communication style or approach preferences' },
                    { value: 'target_audience', label: 'Target audience', description: 'Who will use or see the output' },
                    { value: 'success_criteria', label: 'Success criteria', description: 'How you\'ll measure success' }
                ]
            }
        ];
    }

    init() {
        console.log(`Total questions: ${this.questions.length}`);
        console.log('Question IDs:', this.questions.map(q => q.id));
        this.renderQuestion();
        this.setupEventListeners();
        this.updateProgress();
    }

    setupEventListeners() {
        document.getElementById('nextBtn').addEventListener('click', () => this.nextStep());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevStep());
        document.getElementById('generateBtn').addEventListener('click', () => this.generatePrompt());
        document.getElementById('copyBtn').addEventListener('click', () => this.copyPrompt());
        
        // Use event delegation for the Start New Prompt button since it might be dynamically shown/hidden
        document.addEventListener('click', (event) => {
            if (event.target && event.target.id === 'newPromptBtn') {
                console.log('Start New Prompt button clicked (via event delegation)');
                event.preventDefault();
                event.stopPropagation();
                this.startNewPrompt();
            }
        });
        
        // Also try direct attachment if button exists
        const newPromptBtn = document.getElementById('newPromptBtn');
        if (newPromptBtn) {
            newPromptBtn.addEventListener('click', (event) => {
                console.log('Start New Prompt button clicked (direct listener)');
                event.preventDefault();
                event.stopPropagation();
                this.startNewPrompt();
            });
            console.log('Start New Prompt button event listener attached (direct)');
        } else {
            console.log('Start New Prompt button not found initially (will use event delegation)');
        }
    }

    renderQuestion() {
        const container = document.getElementById('questionContainer');
        const question = this.questions[this.currentStep];
        
        container.innerHTML = `
            <div class="question-title">${question.title}</div>
            <div class="question-description">${question.description}</div>
            <div class="form-group">
                ${this.renderQuestionInput(question)}
            </div>
        `;

        this.setupQuestionEventListeners(question);
    }

    renderQuestionInput(question) {
        switch (question.type) {
            case 'radio':
                return `
                    <div class="radio-group">
                        ${question.options.map(option => `
                            <div class="radio-item" data-value="${option.value}">
                                <input type="radio" name="${question.id}" value="${option.value}" id="${question.id}_${option.value}">
                                <label for="${question.id}_${option.value}">
                                    <strong>${option.label}</strong>
                                    <br><small>${option.description}</small>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `;
            case 'checkbox':
                return `
                    <div class="checkbox-group">
                        ${question.options.map(option => `
                            <div class="checkbox-item" data-value="${option.value}">
                                <input type="checkbox" name="${question.id}" value="${option.value}" id="${question.id}_${option.value}">
                                <label for="${question.id}_${option.value}">
                                    <strong>${option.label}</strong>
                                    <br><small>${option.description}</small>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                `;
            case 'textarea':
                return `
                    <textarea 
                        id="${question.id}" 
                        placeholder="${question.placeholder || ''}"
                        rows="4"
                    >${this.answers[question.id] || ''}</textarea>
                `;
            default:
                return '';
        }
    }

    setupQuestionEventListeners(question) {
        if (question.type === 'radio') {
            document.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
                input.addEventListener('change', (e) => {
                    this.answers[question.id] = e.target.value;
                    this.updateRadioSelection(question.id, e.target.value);
                });
            });
        } else if (question.type === 'checkbox') {
            document.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
                input.addEventListener('change', (e) => {
                    this.updateCheckboxAnswers(question.id, e.target.value, e.target.checked);
                });
            });
        } else if (question.type === 'textarea') {
            document.getElementById(question.id).addEventListener('input', (e) => {
                this.answers[question.id] = e.target.value;
            });
        }
    }

    updateRadioSelection(questionId, value) {
        document.querySelectorAll(`[data-value]`).forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector(`[data-value="${value}"]`).classList.add('selected');
    }

    updateCheckboxAnswers(questionId, value, checked) {
        if (!this.answers[questionId]) {
            this.answers[questionId] = [];
        }
        
        if (checked) {
            if (!this.answers[questionId].includes(value)) {
                this.answers[questionId].push(value);
            }
        } else {
            this.answers[questionId] = this.answers[questionId].filter(v => v !== value);
        }
        
        document.querySelector(`[data-value="${value}"]`).classList.toggle('selected', checked);
    }

    nextStep() {
        console.log('nextStep called, current step:', this.currentStep);
        console.log('Current question ID:', this.questions[this.currentStep].id);
        console.log('Total questions:', this.questions.length);
        console.log('All question IDs:', this.questions.map((q, i) => `${i}: ${q.id}`));
        
        if (this.validateCurrentStep()) {
            // Check if we need to add dynamic context questions AFTER leaving context_details step
            if (this.questions[this.currentStep].id === 'context_details') {
                console.log('Leaving context_details step, adding dynamic questions...');
                console.log('Selected contexts before adding:', this.answers.context_details);
                this.currentStep++;
                this.addDynamicContextQuestions();
                console.log(`Added dynamic questions. Total questions now: ${this.questions.length}`);
                return;
            }
            
            this.currentStep++;
            console.log(`Moving to step ${this.currentStep + 1} of ${this.questions.length}`);
            console.log(`Next question will be: ${this.questions[this.currentStep]?.id || 'none'}`);
            console.log(`Current step index: ${this.currentStep}, Question at this index: ${this.questions[this.currentStep]?.id || 'none'}`);
            
            if (this.currentStep < this.questions.length) {
                this.renderQuestion();
                this.updateProgress();
                this.updateNavigation();
            } else {
                // We've completed all questions, show generate button
                console.log('All questions completed, showing generate button');
                this.showGenerateButton();
            }
        } else {
            console.log('Validation failed');
        }
    }

    prevStep() {
        if (this.currentStep > 0) {
            this.currentStep--;
            
            // If we're going back to the context_details question, we need to rebuild the dynamic questions
            if (this.questions[this.currentStep].id === 'context_details') {
                this.rebuildDynamicContextQuestions();
                console.log(`Rebuilt dynamic questions. Total questions now: ${this.questions.length}`);
            }
            
            this.renderQuestion();
            this.updateProgress();
            this.updateNavigation();
        }
    }

    validateCurrentStep() {
        const question = this.questions[this.currentStep];
        const answer = this.answers[question.id];
        
        // Check if answer exists and is not empty
        if (!answer || 
            (Array.isArray(answer) && answer.length === 0) ||
            (typeof answer === 'string' && answer.trim() === '')) {
            alert(`Please answer the question: ${question.title}`);
            return false;
        }
        
        return true;
    }

    updateProgress() {
        // Calculate progress based on current step and total questions
        const totalQuestions = this.questions.length;
        const currentStepNumber = this.currentStep + 1;
        const progress = (currentStepNumber / totalQuestions) * 100;
        
        console.log(`updateProgress called: currentStep=${this.currentStep}, totalQuestions=${totalQuestions}, currentStepNumber=${currentStepNumber}`);
        
        // Update progress bar
        document.getElementById('progressFill').style.width = `${Math.min(progress, 100)}%`;
        
        // Update progress text
        document.getElementById('progressText').textContent = `Step ${currentStepNumber} of ${totalQuestions}`;
        
        console.log(`Progress updated: Step ${currentStepNumber} of ${totalQuestions} (${progress.toFixed(1)}%)`);
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const generateBtn = document.getElementById('generateBtn');
        
        // Show/hide previous button
        prevBtn.style.display = this.currentStep > 0 ? 'flex' : 'none';
        
        // Show/hide next button - show if we're not on the last step OR if we're on context_details step
        if (this.currentStep < this.questions.length - 1 || this.questions[this.currentStep].id === 'context_details') {
            nextBtn.style.display = 'flex';
            generateBtn.style.display = 'none';
        } else {
            // We're on the last step, show generate button instead
            nextBtn.style.display = 'none';
            generateBtn.style.display = 'flex';
        }
    }

    showGenerateButton() {
        // Hide the question container and show generate button
        document.getElementById('questionContainer').innerHTML = `
            <div class="question-title">Ready to Generate Your Prompt!</div>
            <div class="question-description">
                You've completed all the questions. Click the button below to generate your optimized prompt for ${this.aiPlatforms[this.answers.ai_platform]?.name || 'your chosen AI platform'}.
            </div>
        `;
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('generateBtn').style.display = 'flex';
        document.getElementById('prevBtn').style.display = 'flex';
    }

    generatePrompt() {
        const aiPlatform = this.answers.ai_platform;
        const aiInfo = this.aiPlatforms[aiPlatform];
        
        const prompt = this.buildOptimizedPrompt(aiPlatform, aiInfo);
        
        document.getElementById('generatedPrompt').value = prompt;
        document.getElementById('resultContainer').style.display = 'block';
        
        // Safely hide question container and navigation if they exist
        const questionContainer = document.getElementById('questionContainer');
        const navigation = document.getElementById('navigation');
        
        if (questionContainer) {
            questionContainer.style.display = 'none';
        }
        if (navigation) {
            navigation.style.display = 'none';
        }
        
        this.showAITips(aiInfo);
        
        // Scroll to result
        document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
    }

    buildOptimizedPrompt(aiPlatform, aiInfo) {
        const taskType = this.answers.task_type;
        const complexity = this.answers.complexity;
        const outputFormats = this.answers.output_format || [];
        const extraPreferences = this.answers.extra_preferences || '';
        
        let prompt = '';
        
        // Role definition based on AI platform
        prompt += this.getRoleDefinition(aiPlatform, taskType, complexity);
        
        // Task description
        prompt += this.getTaskDescription(taskType, complexity);
        
        // Context and constraints (now handles dynamic context)
        prompt += this.getContextSection([], extraPreferences);
        
        // Output format requirements
        prompt += this.getOutputFormatSection(outputFormats);
        
        // AI-specific optimizations
        prompt += this.getAISpecificOptimizations(aiPlatform, aiInfo);
        
        // Closing instructions
        prompt += this.getClosingInstructions(aiPlatform);
        
        return prompt.trim();
    }

    getRoleDefinition(aiPlatform, taskType, complexity) {
        const roleMap = {
            'coding': 'expert software developer',
            'analysis': 'data analyst and research expert',
            'creative': 'creative writing specialist',
            'business': 'business strategy consultant',
            'learning': 'educational expert and tutor',
            'problem_solving': 'problem-solving specialist',
            'other': 'expert in the relevant field'
        };
        
        const complexityMap = {
            'simple': 'experienced',
            'moderate': 'highly experienced',
            'complex': 'expert-level',
            'expert': 'world-class expert'
        };
        
        const role = roleMap[taskType] || 'expert';
        const level = complexityMap[complexity] || 'experienced';
        
        return `You are a ${level} ${role} with deep expertise in your field. `;
    }

    getTaskDescription(taskType, complexity) {
        const complexityDescriptions = {
            'simple': 'Please provide a clear, straightforward solution',
            'moderate': 'Please provide a detailed solution with multiple considerations',
            'complex': 'Please provide a comprehensive solution with thorough analysis',
            'expert': 'Please provide an expert-level solution with deep insights and advanced techniques'
        };
        
        return `Your task is to help with a ${taskType} problem. ${complexityDescriptions[complexity] || complexityDescriptions['moderate']}. `;
    }

    getContextSection(contextDetails, extraPreferences) {
        let context = '';
        
        // Handle experience level
        if (this.answers.context_experience_level) {
            const experienceLevel = this.answers.context_experience_level;
            const experienceMap = {
                'beginner': 'tailor your response for a beginner level with clear, basic explanations',
                'intermediate': 'tailor your response for an intermediate level with moderate complexity',
                'advanced': 'tailor your response for an advanced level with sophisticated concepts',
                'expert': 'tailor your response for an expert level with deep, technical insights'
            };
            context += `Please ${experienceMap[experienceLevel] || experienceMap['intermediate']}. `;
        }
        
        // Handle project context
        if (this.answers.context_project_context) {
            context += `Project context: ${this.answers.context_project_context}. `;
        }
        
        // Handle constraints
        if (this.answers.context_constraints) {
            context += `Constraints and limitations: ${this.answers.context_constraints}. `;
        }
        
        // Handle preferences
        if (this.answers.context_preferences && this.answers.context_preferences.length > 0) {
            const preferences = this.answers.context_preferences;
            let preferenceText = 'Please adapt your response style as follows: ';
            
            if (preferences.includes('detailed_explanations')) {
                preferenceText += 'Provide comprehensive, step-by-step explanations. ';
            }
            if (preferences.includes('concise_responses')) {
                preferenceText += 'Keep responses brief and to-the-point. ';
            }
            if (preferences.includes('technical_jargon')) {
                preferenceText += 'Use appropriate technical terminology and concepts. ';
            }
            if (preferences.includes('simple_language')) {
                preferenceText += 'Use plain language and avoid unnecessary technical jargon. ';
            }
            if (preferences.includes('examples_included')) {
                preferenceText += 'Always include practical examples. ';
            }
            if (preferences.includes('visual_formatting')) {
                preferenceText += 'Use clear structure with bullet points, tables, and formatting. ';
            }
            
            context += preferenceText;
        }
        
        // Handle target audience
        if (this.answers.context_target_audience) {
            context += `Target audience: ${this.answers.context_target_audience}. `;
        }
        
        // Handle success criteria
        if (this.answers.context_success_criteria) {
            context += `Success criteria: ${this.answers.context_success_criteria}. `;
        }
        
        // Handle extra preferences
        if (extraPreferences) {
            context += `Additional preferences and requirements: ${extraPreferences}. `;
        }
        
        return context;
    }

    getOutputFormatSection(outputFormats) {
        if (outputFormats.length === 0) return '';
        
        let format = 'Please format your response as follows: ';
        
        if (outputFormats.includes('step_by_step')) {
            format += 'Provide step-by-step instructions. ';
        }
        
        if (outputFormats.includes('code_examples')) {
            format += 'Include working code examples with comments. ';
        }
        
        if (outputFormats.includes('explanations')) {
            format += 'Provide detailed explanations and reasoning. ';
        }
        
        if (outputFormats.includes('bullet_points')) {
            format += 'Use bullet points for clarity. ';
        }
        
        if (outputFormats.includes('structured_data')) {
            format += 'Present information in structured format (tables, lists). ';
        }
        
        if (outputFormats.includes('creative_format')) {
            format += 'Use creative and engaging presentation style. ';
        }
        
        return format;
    }

    getAISpecificOptimizations(aiPlatform, aiInfo) {
        const optimizations = {
            'chatgpt': 'Use clear, conversational language. Break down complex tasks into manageable steps. ',
            'claude': 'Provide detailed reasoning and analysis. Ask for step-by-step thought processes. ',
            'gemini': 'Leverage research capabilities and fact-checking. Request sources and citations. ',
            'copilot': 'Focus on code generation and programming tasks. Provide clear code context. ',
            'copilot-x': 'Use advanced coding patterns and architectural considerations. ',
            'cursor': 'Emphasize code quality, maintainability, and best practices. ',
            'perplexity': 'Frame as research questions and request credible sources. ',
            'bard': 'Use natural, conversational approach with creative solutions. ',
            'servicenow': 'Follow ServiceNow best practices and governance standards. '
        };
        
        return optimizations[aiPlatform] || '';
    }

    getClosingInstructions(aiPlatform) {
        const closings = {
            'chatgpt': 'Please provide a comprehensive response that addresses all aspects of the request.',
            'claude': 'Please provide a thorough analysis with detailed reasoning and explanations.',
            'gemini': 'Please provide a well-researched response with credible sources and citations.',
            'copilot': 'Please provide clean, well-documented code that follows best practices.',
            'copilot-x': 'Please provide enterprise-grade code with proper architecture and testing.',
            'cursor': 'Please provide maintainable, efficient code with clear documentation.',
            'perplexity': 'Please provide a research-backed response with reliable sources.',
            'bard': 'Please provide a creative, engaging response with multiple perspectives.',
            'servicenow': 'Please provide a solution that follows ServiceNow standards and best practices.'
        };
        
        return closings[aiPlatform] || 'Please provide a comprehensive and helpful response.';
    }

    showAITips(aiInfo) {
        const tipsContainer = document.getElementById('aiTips');
        tipsContainer.innerHTML = `
            <h3><i class="${aiInfo.icon}"></i> ${aiInfo.name} Best Practices</h3>
            <ul>
                ${aiInfo.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        `;
    }

    async copyPrompt() {
        const promptText = document.getElementById('generatedPrompt').value;
        
        try {
            // Try modern Clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(promptText);
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = promptText;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            // Show success feedback
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyBtn.style.background = '#28a745';
            copyBtn.style.color = 'white';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
                copyBtn.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Unable to copy. Please select and copy manually.');
        }
    }

    addDynamicContextQuestions() {
        const selectedContexts = this.answers.context_details || [];
        const contextQuestions = this.getContextQuestionTemplates();
        
        console.log('addDynamicContextQuestions called');
        console.log('Selected contexts:', selectedContexts);
        console.log('Available context question templates:', Object.keys(contextQuestions));
        
        // Find the index where we need to insert the dynamic questions
        const contextIndex = this.questions.findIndex(q => q.id === 'context_details');
        const insertIndex = contextIndex + 1;
        
        // Remove any existing dynamic context questions and extra_preferences
        this.questions = this.questions.filter(q => !q.id.startsWith('context_') && q.id !== 'extra_preferences');
        
        // Add dynamic questions for selected contexts
        selectedContexts.forEach(contextType => {
            if (contextQuestions[contextType]) {
                this.questions.splice(insertIndex, 0, contextQuestions[contextType]);
            }
        });
        
        // Always add the extra preferences question
        this.questions.push({
            id: 'extra_preferences',
            title: 'Any extra preferences or requirements?',
            description: 'Add any additional preferences, requirements, or special considerations for your task.',
            type: 'textarea',
            placeholder: 'e.g., Must use Python 3.8+, Should follow company coding standards, Need to be completed by Friday, Must be accessible to beginners, Prefer concise responses, etc.'
        });
        
        console.log(`Added ${selectedContexts.length} dynamic context questions + extra preferences`);
        console.log('Total questions now:', this.questions.length);
        console.log('Questions:', this.questions.map(q => q.id));
        
        // Render the next question (currentStep was already incremented in nextStep)
        this.renderQuestion();
        this.updateProgress();
        this.updateNavigation();
    }

    rebuildDynamicContextQuestions() {
        const selectedContexts = this.answers.context_details || [];
        const contextQuestions = this.getContextQuestionTemplates();
        
        // Find the index where we need to insert the dynamic questions
        const contextIndex = this.questions.findIndex(q => q.id === 'context_details');
        const insertIndex = contextIndex + 1;
        
        // Remove any existing dynamic context questions and extra_preferences
        this.questions = this.questions.filter(q => !q.id.startsWith('context_') && q.id !== 'extra_preferences');
        
        // Add dynamic questions for selected contexts
        selectedContexts.forEach(contextType => {
            if (contextQuestions[contextType]) {
                this.questions.splice(insertIndex, 0, contextQuestions[contextType]);
            }
        });
        
        // Add the extra preferences question
        this.questions.push({
            id: 'extra_preferences',
            title: 'Any extra preferences or requirements?',
            description: 'Add any additional preferences, requirements, or special considerations for your task.',
            type: 'textarea',
            placeholder: 'e.g., Must use Python 3.8+, Should follow company coding standards, Need to be completed by Friday, Must be accessible to beginners, Prefer concise responses, etc.'
        });
        
        console.log(`Rebuilt ${selectedContexts.length} dynamic context questions + extra preferences`);
    }

    getContextQuestionTemplates() {
        return {
            'experience_level': {
                id: 'context_experience_level',
                title: 'What is your experience level?',
                description: 'This helps the AI tailor the response to your skill level.',
                type: 'radio',
                options: [
                    { value: 'beginner', label: 'Beginner', description: 'New to this topic, need basic explanations' },
                    { value: 'intermediate', label: 'Intermediate', description: 'Some experience, comfortable with moderate complexity' },
                    { value: 'advanced', label: 'Advanced', description: 'Experienced, can handle complex concepts' },
                    { value: 'expert', label: 'Expert', description: 'Very experienced, looking for advanced insights' }
                ]
            },
            'project_context': {
                id: 'context_project_context',
                title: 'Tell us about your project context',
                description: 'Provide background information about your project or work environment.',
                type: 'textarea',
                placeholder: 'e.g., Building a web application using React, Working on a data analysis project for a client, Creating content for a tech blog, etc.'
            },
            'constraints': {
                id: 'context_constraints',
                title: 'What are your constraints and limitations?',
                description: 'Let us know about any time, budget, technical, or other constraints.',
                type: 'textarea',
                placeholder: 'e.g., Must be completed by Friday, Limited to free tools only, Needs to work on mobile devices, Must follow company security policies, etc.'
            },
            'preferences': {
                id: 'context_preferences',
                title: 'What are your style preferences?',
                description: 'How would you like the AI to communicate with you?',
                type: 'checkbox',
                options: [
                    { value: 'detailed_explanations', label: 'Detailed explanations', description: 'Comprehensive, step-by-step explanations' },
                    { value: 'concise_responses', label: 'Concise responses', description: 'Brief, to-the-point answers' },
                    { value: 'technical_jargon', label: 'Technical jargon', description: 'Use technical terminology and concepts' },
                    { value: 'simple_language', label: 'Simple language', description: 'Avoid technical jargon, use plain language' },
                    { value: 'examples_included', label: 'Examples included', description: 'Always provide practical examples' },
                    { value: 'visual_formatting', label: 'Visual formatting', description: 'Use bullet points, tables, and clear structure' }
                ]
            },
            'target_audience': {
                id: 'context_target_audience',
                title: 'Who is your target audience?',
                description: 'Who will be using or seeing the output from this AI interaction?',
                type: 'textarea',
                placeholder: 'e.g., My development team, Clients who are non-technical, Students learning programming, General public, etc.'
            },
            'success_criteria': {
                id: 'context_success_criteria',
                title: 'How will you measure success?',
                description: 'What would make this AI interaction successful for you?',
                type: 'textarea',
                placeholder: 'e.g., Code that compiles without errors, Clear understanding of the concept, Actionable next steps, Time saved on research, etc.'
            }
        };
    }

    startNewPrompt() {
        console.log('startNewPrompt() called');
        
        // Reset application state
        this.currentStep = 0;
        this.answers = {};
        
        console.log('Reset currentStep to:', this.currentStep);
        console.log('Reset answers to:', this.answers);
        
        // Reset questions to initial state (remove any dynamic questions)
        this.questions = this.initializeQuestions();
        
        console.log('Reset questions to initial state, total questions:', this.questions.length);
        
        // Hide result container and show question container
        const resultContainer = document.getElementById('resultContainer');
        const questionContainer = document.getElementById('questionContainer');
        const navigation = document.getElementById('navigation');
        
        if (resultContainer) {
            resultContainer.style.display = 'none';
            console.log('Hidden result container');
        }
        
        if (questionContainer) {
            questionContainer.style.display = 'block';
            console.log('Showed question container');
        }
        
        if (navigation) {
            navigation.style.display = 'flex';
            console.log('Showed navigation');
        }
        
        // Reset progress
        this.updateProgress();
        this.updateNavigation();
        
        // Render first question
        this.renderQuestion();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        console.log('New prompt started - reset to step 1');
        console.log('Current step after reset:', this.currentStep);
        console.log('Total questions after reset:', this.questions.length);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.app = new AIPromptOptimizer();
});
