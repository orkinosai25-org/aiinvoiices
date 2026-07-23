# ⚡ QUICK START GUIDE

## 🚀 Run the App in 3 Steps

### **Step 1: Install Dependencies (First Time Only)**

```bash
npm run install:all
```

This will install dependencies for:
- Root folder
- Backend folder
- Frontend folder

### **Step 2: Set Up Environment Variables**

**Backend (`backend/.env`):**
```env
CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
GEMINI_API_KEY=your_gemini_key_here
MONGODB_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:3000
```

**Frontend (`frontend/.env`):**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

### **Step 3: Run the App**

**Option A: Using npm (Recommended)**
```bash
npm run dev
```

**Option B: Using batch file (Windows)**
```bash
start.bat
```

**Option C: Double-click**
- Just double-click `start.bat` file

---

## 🌐 Access the App

After running, open your browser:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000

---

## 🛑 Stop the App

Press `Ctrl + C` in the terminal

---

## 📋 Available Commands

```bash
# Run both frontend and backend
npm run dev
npm start

# Run backend only
npm run dev:backend

# Run frontend only
npm run dev:frontend

# Install all dependencies
npm run install:all
```

---

## 🔑 Get API Keys

### **1. Clerk (Authentication)**
1. Go to: https://clerk.com
2. Sign up → Create application
3. Copy keys → Add to `.env`

### **2. Google Gemini (AI)**
1. Go to: https://aistudio.google.com
2. Sign in → Get API key
3. Copy key → Add to `backend/.env`

### **3. MongoDB (Database)**
1. Go to: https://mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string → Add to `backend/.env`

---

## ✅ Verify It's Working

1. **Backend:** Visit http://localhost:4000
   - Should see: "API WORKING"

2. **Frontend:** Visit http://localhost:3000
   - Should see: Home page with "Professional Invoices in Seconds"

3. **Sign Up:** Click "Start Creating Free"
   - Clerk sign-up modal should appear

4. **Create Invoice:** After sign-in
   - Go to Dashboard
   - Click "Create Invoice"
   - Fill form and save

---

## 🐛 Common Issues

### **"Port 4000 already in use"**
```bash
# Windows - Kill process on port 4000
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### **"Cannot connect to MongoDB"**
- Check `MONGODB_URI` in `backend/.env`
- Verify IP is whitelisted in MongoDB Atlas
- Test connection string

### **"Clerk authentication failed"**
- Verify keys in both `.env` files match
- Restart both servers after changing `.env`
- Check keys at: https://dashboard.clerk.com

### **"Gemini API error"**
- Verify `GEMINI_API_KEY` in `backend/.env`
- Check quota at: https://aistudio.google.com
- Make sure key is not expired

---

## 📁 Project Structure

```
PromptToInvoice-SaaS/
├── backend/              # Node.js + Express API
├── frontend/             # React + Vite app
├── package.json          # Root scripts
├── start.bat            # Windows start script
├── README.md            # Full documentation
└── QUICK_START.md       # This file
```

---

## 🎯 Next Steps

1. ✅ Run `npm run install:all`
2. ✅ Set up `.env` files
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:3000
5. ✅ Sign up and create your first invoice!

---

**Need help? Check README.md for detailed documentation.**
