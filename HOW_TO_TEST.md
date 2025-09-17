# 🧪 How to Test AI Prompt Optimizer

## 🎯 **Quick Start Testing**

### **Option 1: Quick Automated Test (30 seconds)**
```bash
node test-quick.js
```
**What it tests:** File integrity, code structure, basic functionality
**Result:** Should show 100% pass rate ✅

### **Option 2: Manual Testing (5 minutes)**
1. **Open main app:** http://localhost:8002
2. **Test the complete flow:**
   - Go through steps 1-4 (AI Platform, Task Type, Complexity, Output Format)
   - At step 5, select context options
   - **CRITICAL:** Verify "Next" button appears (not "Generate")
   - Click "Next" and verify dynamic questions appear
   - Complete the flow to generate prompt
3. **Test navigation:** Use back/forward buttons
4. **Test reset:** Use "Start New Prompt" button

### **Option 3: Simple Test Form (3 minutes)**
1. **Open test form:** http://localhost:8002/test-simple.html
2. **Follow the instructions** on the page
3. **Fill out the form** with your observations
4. **Submit results** for summary

## 🔍 **Detailed Testing Guide**

### **Step 1: Verify Server is Running**
```bash
curl -s http://localhost:8002 > /dev/null && echo "✅ Server running" || echo "❌ Server down"
```

### **Step 2: Test Main Application**
**URL:** http://localhost:8002

**Expected Flow:**
1. **Step 1:** AI Platform selection
2. **Step 2:** Task Type selection  
3. **Step 3:** Complexity selection
4. **Step 4:** Output Format selection
5. **Step 5:** Context Details selection
   - ✅ **CRITICAL:** "Next" button should be visible
   - Select multiple context options
6. **Dynamic Questions:** Specific questions for each selected context
7. **Extra Preferences:** Final preferences question
8. **Generate Prompt:** Generate and copy functionality

### **Step 3: Test Navigation**
- **Forward navigation:** Click "Next" through all steps
- **Back navigation:** Click "Previous" to go back
- **Reset functionality:** Click "Start New Prompt"

### **Step 4: Test Edge Cases**
- **Empty context selection:** Select no context options
- **Single context selection:** Select only one context option
- **All context selections:** Select all context options
- **Validation:** Try to proceed without answering required questions

## 🐛 **Common Issues & Solutions**

### **Issue: "Next" button missing at Step 5**
**Solution:** This should be fixed in the latest code
**Check:** Step 5 should show "Next" button, not "Generate"

### **Issue: Dynamic questions not appearing**
**Solution:** Ensure you select context options before clicking "Next"
**Check:** Console should show "addDynamicContextQuestions called"

### **Issue: App goes directly to generate**
**Solution:** Verify you're clicking "Next" from Step 5, not "Generate"
**Check:** Step 5 should show context selection options

### **Issue: Console errors**
**Solution:** Check browser console (F12) for error messages
**Common errors:** Missing elements, JavaScript errors

## 📊 **Test Results Interpretation**

### **Quick Test Results**
- **100% pass:** ✅ Everything is working correctly
- **< 100% pass:** ❌ Some issues need to be fixed

### **Manual Test Results**
- **All steps work:** ✅ Application is functioning correctly
- **Step 5 issues:** ❌ Navigation problem needs fixing
- **Dynamic questions missing:** ❌ Dynamic logic needs fixing
- **Generate prompt fails:** ❌ Prompt generation needs fixing

### **Browser Console**
- **No errors:** ✅ Clean execution
- **Warnings:** ⚠️ Minor issues, may still work
- **Errors:** ❌ Critical issues that break functionality

## 🚀 **Testing Checklist**

### **Basic Functionality**
- [ ] Page loads without errors
- [ ] All UI elements visible
- [ ] Step navigation works
- [ ] Form validation works

### **Critical Features**
- [ ] Step 5 shows "Next" button
- [ ] Context selection works
- [ ] Dynamic questions appear
- [ ] Extra preferences appear
- [ ] Generate prompt works

### **Advanced Features**
- [ ] Back navigation works
- [ ] Start new prompt works
- [ ] Copy to clipboard works
- [ ] All context types work

### **Edge Cases**
- [ ] Empty selections work
- [ ] Single selections work
- [ ] All selections work
- [ ] Validation works

## 📞 **Getting Help**

### **If Tests Fail:**
1. **Check console errors** (F12 in browser)
2. **Run quick test** to verify file integrity
3. **Check server status** (curl command above)
4. **Verify all files present** (ls -la command)

### **If Manual Testing Fails:**
1. **Refresh the page** (Ctrl+F5)
2. **Clear browser cache**
3. **Check console for errors**
4. **Try different browser**

### **If Everything Fails:**
1. **Restart the server**
2. **Check file permissions**
3. **Verify all files are present**
4. **Check for syntax errors**

## 🎉 **Success Criteria**

**Minimum Requirements:**
- ✅ Quick test passes (100%)
- ✅ Step 5 shows "Next" button
- ✅ Dynamic questions appear
- ✅ Complete flow works
- ✅ No critical console errors

**Excellent Results:**
- ✅ All tests pass
- ✅ Smooth user experience
- ✅ Fast response times
- ✅ Works across browsers
- ✅ No memory leaks

---

**Ready to test! 🚀**

The application should now work correctly with all the requested features:
- Step 5 with "Next" button
- Dynamic context questions
- Extra preferences step
- Complete end-to-end flow
