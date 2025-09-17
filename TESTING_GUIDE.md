# 🧪 AI Prompt Optimizer - Testing Guide

This guide provides comprehensive testing instructions for the AI Prompt Optimizer application.

## 📋 Quick Test (Automated)

### 1. Command Line Test
```bash
# Run the quick automated test
node test-quick.js
```

**Expected Output:**
- ✅ All 10 tests should pass
- Success rate: 100%
- No failed tests

### 2. Browser Test Suite
```bash
# Start the server
python3 server.py 8002

# Open in browser
open http://localhost:8002/test-functionality.html
```

**Features:**
- 🚀 Run All Tests - Comprehensive test suite
- 📋 Run Basic Tests - Core functionality
- ⚡ Run Advanced Tests - Dynamic features
- 🗑️ Clear Results - Reset test results
- Real-time progress tracking
- Detailed test logs
- Test summary with pass/fail rates

## 🔍 Manual Testing Checklist

### Basic Functionality Tests

#### ✅ Test 1: Page Load
- [ ] Open http://localhost:8002
- [ ] Page loads without errors
- [ ] Title shows "AI Prompt Optimizer"
- [ ] All UI elements visible

#### ✅ Test 2: Step Navigation
- [ ] Start at Step 1 (AI Platform)
- [ ] Select an AI platform (e.g., ChatGPT)
- [ ] Click "Next" → Goes to Step 2
- [ ] Select task type (e.g., Coding & Development)
- [ ] Click "Next" → Goes to Step 3
- [ ] Select complexity (e.g., Moderate)
- [ ] Click "Next" → Goes to Step 4
- [ ] Select output format (e.g., Code examples)
- [ ] Click "Next" → Goes to Step 5

#### ✅ Test 3: Context Details (Step 5)
- [ ] Step 5 shows "What context should the AI know about?"
- [ ] **CRITICAL**: "Next" button is visible (not "Generate")
- [ ] Select multiple context options:
  - [ ] Your experience level
  - [ ] Project context
  - [ ] Constraints and limitations
  - [ ] Style preferences
  - [ ] Target audience
  - [ ] Success criteria
- [ ] Click "Next"

#### ✅ Test 4: Dynamic Context Questions
- [ ] **CRITICAL**: Dynamic questions appear after Step 5
- [ ] For each selected context, specific questions should show:
  - [ ] Experience level → "What is your experience level?" (radio buttons)
  - [ ] Project context → "Tell us about your project context" (text area)
  - [ ] Constraints → "What are your constraints and limitations?" (text area)
  - [ ] Style preferences → "What are your style preferences?" (checkboxes)
  - [ ] Target audience → "Who is your target audience?" (text area)
  - [ ] Success criteria → "How will you measure success?" (text area)
- [ ] Answer the dynamic questions
- [ ] Click "Next" after each question

#### ✅ Test 5: Extra Preferences (Step 6)
- [ ] "Any extra preferences or requirements?" question appears
- [ ] Text area with placeholder examples
- [ ] Enter some preferences (e.g., "Must use Python 3.8+")
- [ ] Click "Next"

#### ✅ Test 6: Generate Prompt
- [ ] "Generate Prompt" button appears
- [ ] Click "Generate Prompt"
- [ ] Generated prompt appears in text area
- [ ] Prompt includes all provided information
- [ ] "Copy to Clipboard" button works
- [ ] "Start New Prompt" button works

### Advanced Functionality Tests

#### ✅ Test 7: Back Navigation
- [ ] Use "Previous" button to go back through steps
- [ ] Can modify previous answers
- [ ] Dynamic questions rebuild when going back to context details
- [ ] Navigation buttons show/hide correctly

#### ✅ Test 8: Start New Prompt
- [ ] Click "Start New Prompt" button
- [ ] Application resets to Step 1
- [ ] All previous answers cleared
- [ ] Can start fresh flow

#### ✅ Test 9: Validation
- [ ] Try to proceed without answering required questions
- [ ] Validation message appears
- [ ] Cannot proceed until question answered

#### ✅ Test 10: Edge Cases
- [ ] Select no context options in Step 5
- [ ] Should still show extra preferences question
- [ ] Complete flow with minimal selections
- [ ] Test with maximum selections

## 🐛 Debugging Tests

### Console Logs
Open browser console (F12) and look for:

#### ✅ Expected Logs
```
Total questions: 5
Question IDs: ['ai_platform', 'task_type', 'complexity', 'output_format', 'context_details']
Leaving context_details step, adding dynamic questions...
Selected contexts before adding: ['experience_level', 'project_context']
addDynamicContextQuestions called
Selected contexts: ['experience_level', 'project_context']
Available context question templates: ['experience_level', 'project_context', 'constraints', 'preferences', 'target_audience', 'success_criteria']
Added 2 dynamic context questions + extra preferences
Total questions now: 8
```

#### ❌ Error Indicators
- `TypeError: Cannot read properties of null`
- `Uncaught ReferenceError`
- `Validation failed`
- Missing console logs

### Common Issues & Solutions

#### Issue: No "Next" button at Step 5
**Solution:** Navigation logic should show "Next" button at context_details step

#### Issue: Dynamic questions not appearing
**Solution:** Check console for "addDynamicContextQuestions called" log

#### Issue: App goes directly to generate prompt
**Solution:** Verify context_details step is reached and "Next" button is clicked

#### Issue: Back button not working
**Solution:** Check if dynamic questions are rebuilt when navigating back

## 📊 Test Results Template

```
Test Date: ___________
Tester: ___________
Browser: ___________
Server: ___________

Basic Tests:
- [ ] Page Load
- [ ] Step Navigation (1-4)
- [ ] Context Details (Step 5)
- [ ] Dynamic Questions
- [ ] Extra Preferences
- [ ] Generate Prompt

Advanced Tests:
- [ ] Back Navigation
- [ ] Start New Prompt
- [ ] Validation
- [ ] Edge Cases

Console Errors: ___________
Overall Status: ___________
```

## 🚀 Performance Tests

### Load Time
- [ ] Page loads in < 2 seconds
- [ ] No JavaScript errors on load
- [ ] All resources load successfully

### Responsiveness
- [ ] Works on desktop browsers
- [ ] Works on mobile devices
- [ ] UI scales properly

### Memory Usage
- [ ] No memory leaks during navigation
- [ ] Console shows no memory warnings

## 🔧 Troubleshooting

### If Tests Fail

1. **Check Server Status**
   ```bash
   curl -s http://localhost:8002 > /dev/null && echo "Server running" || echo "Server down"
   ```

2. **Check Console Errors**
   - Open browser console (F12)
   - Look for red error messages
   - Check Network tab for failed requests

3. **Verify File Integrity**
   ```bash
   node test-quick.js
   ```

4. **Reset Application**
   - Clear browser cache
   - Hard refresh (Ctrl+F5)
   - Restart server

### Getting Help

If tests continue to fail:
1. Run `node test-quick.js` and share output
2. Open `test-functionality.html` and run tests
3. Share browser console logs
4. Describe exact steps that fail

## 📈 Success Criteria

**Minimum Requirements:**
- ✅ All basic tests pass
- ✅ Dynamic questions appear after Step 5
- ✅ "Next" button visible at Step 5
- ✅ Complete flow works end-to-end
- ✅ No console errors

**Excellent Results:**
- ✅ All tests pass (100% success rate)
- ✅ Smooth user experience
- ✅ Fast response times
- ✅ Works across browsers
- ✅ No memory leaks

---

**Happy Testing! 🎉**
