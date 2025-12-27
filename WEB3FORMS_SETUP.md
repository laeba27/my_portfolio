# 🔧 Web3Forms Setup Guide

## What is Web3Forms?
Web3Forms is a free form backend service that sends form submissions directly to your email. **No server required!**

## ✨ Why We Use It
- ✅ Free and reliable
- ✅ No backend server needed
- ✅ Simple integration
- ✅ Submissions go to your email
- ✅ Supports email notifications
- ✅ Perfect for portfolios/static sites

## 📋 Setup Steps

### Step 1: Visit Web3Forms
Go to [https://web3forms.com/](https://web3forms.com/)

### Step 2: Sign Up
1. Click "Sign Up" or "Get Started"
2. Enter your email address
3. Create a password
4. Verify your email

### Step 3: Create a New Form
1. Log in to Web3Forms dashboard
2. Click "Create Form" or "New Form"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Confirm the email where you want submissions sent

### Step 4: Get Your Access Key
1. After creating the form, you'll see your **Access Key**
2. Copy this key (you'll need it next)

### Step 5: Add Access Key to Portfolio
1. Open `/src/data/portfolio.ts`
2. Find this section:
```typescript
export const web3formsConfig = {
  accessKey: 'your_access_key_here',  // ← Replace with your key
};
```
3. Replace `'your_access_key_here'` with your actual access key
4. Save the file

### Step 6: Test the Form
1. Go to `http://localhost:5173/` in your browser
2. Scroll to "Get In Touch" section
3. Fill out the contact form
4. Click "Send Message"
5. Check your email - the message should arrive!

## 🎯 Expected Email Format
When someone submits the form, you'll receive an email with:
- **Sender**: The user's email from the form
- **Subject**: The subject they entered
- **Message**: Their message
- **Name**: Their name

Example:
```
Name: John Doe
Email: john@example.com
Subject: Project Inquiry
Message: I love your portfolio! Let's work together.
```

## ❓ Troubleshooting

### "Web3Forms is not properly configured" Error
**Problem**: Access key not set or invalid
**Solution**: 
1. Check you copied the key correctly
2. Make sure there's no extra whitespace
3. Double-check it in `/src/data/portfolio.ts`

### Form doesn't send
**Problem**: May be a network issue or invalid key
**Solution**:
1. Check browser console (F12) for error messages
2. Verify the access key is correct
3. Try in an incognito window (extensions may block requests)

### Email doesn't arrive
**Problem**: Email might be in spam folder
**Solution**:
1. Check spam/junk folder
2. Add Web3Forms to safe senders
3. Wait a few minutes (may take time)

## 🔒 Security Notes
- Your access key is used from client-side (it's safe - Web3Forms is designed for this)
- Submissions are sent directly to Web3Forms servers
- Your email is protected from bots

## 📞 Support
If you have issues with Web3Forms:
- Visit https://web3forms.com/docs
- Check FAQs section
- Contact their support team

---

## ✅ Verification Checklist

- [ ] Signed up for Web3Forms
- [ ] Created a form
- [ ] Copied the Access Key
- [ ] Updated `/src/data/portfolio.ts` with the key
- [ ] Tested the contact form
- [ ] Received test email
- [ ] Everything working!

---

**Your contact form is now live! 🎉**
