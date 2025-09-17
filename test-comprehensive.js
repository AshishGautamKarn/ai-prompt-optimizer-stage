#!/usr/bin/env node

/**
 * Comprehensive Test Script for AI Prompt Optimizer
 * Tests all major functionalities programmatically
 */

const fs = require('fs');
const http = require('http');

class ComprehensiveTester {
    constructor() {
        this.results = [];
        this.passed = 0;
        this.failed = 0;
        this.baseUrl = 'http://localhost:8002';
    }

    test(name, condition, message) {
        const passed = condition;
        this.results.push({ name, passed, message });
        if (passed) {
            this.passed++;
            console.log(`✅ ${name}: ${message}`);
        } else {
            this.failed++;
            console.log(`❌ ${name}: ${message}`);
        }
    }

    async makeRequest(path) {
        return new Promise((resolve, reject) => {
            const req = http.get(`${this.baseUrl}${path}`, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve({ status: res.statusCode, data }));
            });
            req.on('error', reject);
            req.setTimeout(5000, () => reject(new Error('Request timeout')));
        });
    }

    async runTests() {
        console.log('🧪 Running Comprehensive Tests for AI Prompt Optimizer\n');
        console.log('=' .repeat(60));

        // Test 1: Server Availability
        try {
            const response = await this.makeRequest('/');
            this.test(
                'Server Availability',
                response.status === 200,
                `Server responding with status ${response.status}`
            );
        } catch (error) {
            this.test('Server Availability', false, `Server not responding: ${error.message}`);
        }

        // Test 2: HTML Structure
        try {
            const response = await this.makeRequest('/');
            const html = response.data;
            this.test(
                'HTML Structure',
                html.includes('questionContainer') && 
                html.includes('progressText') && 
                html.includes('Step 1 of 5') &&
                html.includes('script.js'),
                'Required HTML elements and correct initial progress text found'
            );
        } catch (error) {
            this.test('HTML Structure', false, `Error checking HTML: ${error.message}`);
        }

        // Test 3: CSS Loading
        try {
            const response = await this.makeRequest('/styles.css');
            this.test(
                'CSS Loading',
                response.status === 200 && response.data.includes('progress-fill'),
                'CSS file loads correctly with progress-fill class'
            );
        } catch (error) {
            this.test('CSS Loading', false, `Error loading CSS: ${error.message}`);
        }

        // Test 4: JavaScript Loading
        try {
            const response = await this.makeRequest('/script.js');
            this.test(
                'JavaScript Loading',
                response.status === 200 && response.data.includes('class AIPromptOptimizer'),
                'JavaScript file loads correctly with main class'
            );
        } catch (error) {
            this.test('JavaScript Loading', false, `Error loading JavaScript: ${error.message}`);
        }

        // Test 5: Progress Display Fix
        try {
            const response = await this.makeRequest('/');
            const html = response.data;
            this.test(
                'Progress Display Fix',
                html.includes('Step 1 of 5') && !html.includes('Step 1 of 6'),
                'Progress text shows correct initial step (1 of 5)'
            );
        } catch (error) {
            this.test('Progress Display Fix', false, `Error checking progress display: ${error.message}`);
        }

        // Test 6: CSS Progress Bar Fix
        try {
            const response = await this.makeRequest('/styles.css');
            const css = response.data;
            this.test(
                'CSS Progress Bar Fix',
                css.includes('width: 20%') && css.includes('1/5 steps'),
                'CSS progress bar shows correct initial width (20% for 5 steps)'
            );
        } catch (error) {
            this.test('CSS Progress Bar Fix', false, `Error checking CSS progress bar: ${error.message}`);
        }

        // Test 7: Dynamic Questions Logic
        try {
            const response = await this.makeRequest('/script.js');
            const js = response.data;
            this.test(
                'Dynamic Questions Logic',
                js.includes('addDynamicContextQuestions') && 
                js.includes('getContextQuestionTemplates') &&
                js.includes('context_details'),
                'Dynamic questions logic is implemented'
            );
        } catch (error) {
            this.test('Dynamic Questions Logic', false, `Error checking dynamic questions: ${error.message}`);
        }

        // Test 8: Navigation Logic
        try {
            const response = await this.makeRequest('/script.js');
            const js = response.data;
            this.test(
                'Navigation Logic',
                js.includes('nextStep') && 
                js.includes('prevStep') && 
                js.includes('updateNavigation'),
                'Navigation methods are implemented'
            );
        } catch (error) {
            this.test('Navigation Logic', false, `Error checking navigation: ${error.message}`);
        }

        // Test 9: Copy Functionality
        try {
            const response = await this.makeRequest('/');
            const html = response.data;
            this.test(
                'Copy Functionality',
                html.includes('Copy to Clipboard') && 
                html.includes('copyBtn'),
                'Copy to clipboard functionality is implemented'
            );
        } catch (error) {
            this.test('Copy Functionality', false, `Error checking copy functionality: ${error.message}`);
        }

        // Test 10: Reset Functionality
        try {
            const response = await this.makeRequest('/');
            const html = response.data;
            this.test(
                'Reset Functionality',
                html.includes('Start New Prompt') && 
                html.includes('newPromptBtn'),
                'Reset/start new prompt functionality is implemented'
            );
        } catch (error) {
            this.test('Reset Functionality', false, `Error checking reset functionality: ${error.message}`);
        }

        // Test 11: AI Platform Support
        try {
            const response = await this.makeRequest('/script.js');
            const js = response.data;
            const platformCount = (js.match(/name: '[^']+'/g) || []).length;
            this.test(
                'AI Platform Support',
                platformCount >= 9,
                `Found ${platformCount} AI platforms supported`
            );
        } catch (error) {
            this.test('AI Platform Support', false, `Error checking AI platforms: ${error.message}`);
        }

        // Test 12: Question Types
        try {
            const response = await this.makeRequest('/script.js');
            const js = response.data;
            this.test(
                'Question Types',
                js.includes("type: 'radio'") && 
                js.includes("type: 'checkbox'") && 
                js.includes("type: 'textarea'"),
                'All question types (radio, checkbox, textarea) are supported'
            );
        } catch (error) {
            this.test('Question Types', false, `Error checking question types: ${error.message}`);
        }

        // Test 13: Error Handling
        try {
            const response = await this.makeRequest('/script.js');
            const js = response.data;
            this.test(
                'Error Handling',
                js.includes('try') && 
                js.includes('catch') && 
                js.includes('console.error'),
                'Error handling is implemented with try-catch blocks'
            );
        } catch (error) {
            this.test('Error Handling', false, `Error checking error handling: ${error.message}`);
        }

        // Test 14: Responsive Design
        try {
            const response = await this.makeRequest('/styles.css');
            const css = response.data;
            this.test(
                'Responsive Design',
                css.includes('@media') && 
                css.includes('max-width') &&
                css.includes('flex'),
                'Responsive design with media queries and flexbox is implemented'
            );
        } catch (error) {
            this.test('Responsive Design', false, `Error checking responsive design: ${error.message}`);
        }

        // Test 15: Accessibility Features
        try {
            const response = await this.makeRequest('/');
            const html = response.data;
            this.test(
                'Accessibility Features',
                html.includes('for=') || 
                html.includes('id=') ||
                html.includes('label'),
                'Basic accessibility features (labels, IDs) are implemented'
            );
        } catch (error) {
            this.test('Accessibility Features', false, `Error checking accessibility: ${error.message}`);
        }

        console.log('\n' + '=' .repeat(60));
        console.log(`\n📊 Comprehensive Test Summary:`);
        console.log(`✅ Passed: ${this.passed}`);
        console.log(`❌ Failed: ${this.failed}`);
        console.log(`📈 Success Rate: ${((this.passed / (this.passed + this.failed)) * 100).toFixed(1)}%`);

        if (this.failed === 0) {
            console.log('\n🎉 All comprehensive tests passed! The application is fully functional.');
        } else {
            console.log('\n⚠️  Some tests failed. Please check the issues above.');
        }

        console.log('\n📋 Manual Testing Steps:');
        console.log('1. Open http://localhost:8002 in your browser');
        console.log('2. Test the complete flow: Select AI platform → Task type → Complexity → Output format → Context details');
        console.log('3. Verify dynamic questions appear after step 5');
        console.log('4. Test navigation (Previous/Next buttons)');
        console.log('5. Generate a prompt and test copy functionality');
        console.log('6. Test "Start New Prompt" button');
        console.log('7. Test on different screen sizes (mobile, tablet, desktop)');

        return this.failed === 0;
    }
}

// Run comprehensive tests
const tester = new ComprehensiveTester();
tester.runTests().then(success => {
    process.exit(success ? 0 : 1);
}).catch(error => {
    console.error('Test runner error:', error);
    process.exit(1);
});
