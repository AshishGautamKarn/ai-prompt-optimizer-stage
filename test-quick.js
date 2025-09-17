#!/usr/bin/env node

/**
 * Quick Test Script for AI Prompt Optimizer
 * Run with: node test-quick.js
 */

const fs = require('fs');
const path = require('path');

class QuickTester {
    constructor() {
        this.results = [];
        this.passed = 0;
        this.failed = 0;
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

    async runTests() {
        console.log('🧪 Running Quick Tests for AI Prompt Optimizer\n');
        console.log('=' .repeat(50));

        // Test 1: Check if files exist
        this.test(
            'Files Exist',
            fs.existsSync('index.html') && fs.existsSync('script.js') && fs.existsSync('styles.css'),
            'All required files present'
        );

        // Test 2: Check HTML structure
        try {
            const html = fs.readFileSync('index.html', 'utf8');
            this.test(
                'HTML Structure',
                html.includes('questionContainer') && 
                html.includes('nextBtn') && 
                html.includes('prevBtn') && 
                html.includes('generateBtn'),
                'Required HTML elements found'
            );
        } catch (error) {
            this.test('HTML Structure', false, `Error reading HTML: ${error.message}`);
        }

        // Test 3: Check JavaScript structure
        try {
            const js = fs.readFileSync('script.js', 'utf8');
            this.test(
                'JavaScript Structure',
                js.includes('class AIPromptOptimizer') && 
                js.includes('nextStep') && 
                js.includes('prevStep') && 
                js.includes('addDynamicContextQuestions'),
                'Required JavaScript functions found'
            );
        } catch (error) {
            this.test('JavaScript Structure', false, `Error reading JavaScript: ${error.message}`);
        }

        // Test 4: Check CSS structure
        try {
            const css = fs.readFileSync('styles.css', 'utf8');
            this.test(
                'CSS Structure',
                css.includes('.question-container') && 
                css.includes('.btn') && 
                css.includes('.progress-bar'),
                'Required CSS classes found'
            );
        } catch (error) {
            this.test('CSS Structure', false, `Error reading CSS: ${error.message}`);
        }

        // Test 5: Check for dynamic questions logic
        try {
            const js = fs.readFileSync('script.js', 'utf8');
            this.test(
                'Dynamic Questions Logic',
                js.includes('getContextQuestionTemplates') && 
                js.includes('context_details') && 
                js.includes('extra_preferences'),
                'Dynamic questions logic implemented'
            );
        } catch (error) {
            this.test('Dynamic Questions Logic', false, `Error checking dynamic logic: ${error.message}`);
        }

        // Test 6: Check for navigation fixes
        try {
            const js = fs.readFileSync('script.js', 'utf8');
            this.test(
                'Navigation Fixes',
                js.includes('context_details') && js.includes('nextBtn') && js.includes('updateNavigation'),
                'Navigation logic includes context_details handling'
            );
        } catch (error) {
            this.test('Navigation Fixes', false, `Error checking navigation: ${error.message}`);
        }

        // Test 7: Check for external access files
        this.test(
            'External Access Files',
            fs.existsSync('server.py') && fs.existsSync('server.js') && fs.existsSync('start-server.sh'),
            'External access files present'
        );

        // Test 8: Check package.json
        try {
            const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
            this.test(
                'Package Configuration',
                packageJson.scripts && packageJson.scripts.external,
                'Package.json has external access scripts'
            );
        } catch (error) {
            this.test('Package Configuration', false, `Error reading package.json: ${error.message}`);
        }

        // Test 9: Check for test files
        this.test(
            'Test Files',
            fs.existsSync('test-functionality.html'),
            'Test files created'
        );

        // Test 10: Check file sizes (basic sanity check)
        try {
            const jsSize = fs.statSync('script.js').size;
            const htmlSize = fs.statSync('index.html').size;
            const cssSize = fs.statSync('styles.css').size;
            
            this.test(
                'File Sizes',
                jsSize > 10000 && htmlSize > 1000 && cssSize > 1000,
                `Files have reasonable sizes (JS: ${jsSize}, HTML: ${htmlSize}, CSS: ${cssSize})`
            );
        } catch (error) {
            this.test('File Sizes', false, `Error checking file sizes: ${error.message}`);
        }

        console.log('\n' + '=' .repeat(50));
        console.log(`\n📊 Test Summary:`);
        console.log(`✅ Passed: ${this.passed}`);
        console.log(`❌ Failed: ${this.failed}`);
        console.log(`📈 Success Rate: ${((this.passed / (this.passed + this.failed)) * 100).toFixed(1)}%`);

        if (this.failed === 0) {
            console.log('\n🎉 All tests passed! The application should be working correctly.');
        } else {
            console.log('\n⚠️  Some tests failed. Please check the issues above.');
        }

        console.log('\n📋 Next Steps:');
        console.log('1. Open test-functionality.html in your browser for comprehensive testing');
        console.log('2. Start the server: python3 server.py 8002');
        console.log('3. Open http://localhost:8002 to test the application manually');
        console.log('4. Check browser console for any JavaScript errors');

        return this.failed === 0;
    }
}

// Run tests
const tester = new QuickTester();
tester.runTests().then(success => {
    process.exit(success ? 0 : 1);
}).catch(error => {
    console.error('Test runner error:', error);
    process.exit(1);
});
