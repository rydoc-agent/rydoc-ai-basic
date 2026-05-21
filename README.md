# RyDoc AI

RyDoc AI is a completely local AI assistant built using:

* React + Vite frontend
* Node.js + Express backend
* Ollama local AI models
* Live internet search
* Modern AI chat UI

The project runs fully on your local machine without paid APIs.

---

# Features

* Local AI models using Ollama
* ChatGPT-style UI
* Live web search support
* React frontend
* Express backend
* Markdown rendering
* Fast local inference
* Free and private

---

# Tech Stack

| Technology      | Purpose           |
| --------------- | ----------------- |
| React           | Frontend          |
| Vite            | React bundler     |
| Tailwind CSS    | Styling           |
| Node.js         | Backend runtime   |
| Express         | Backend framework |
| Ollama          | Local AI runtime  |
| Qwen / DeepSeek | AI models         |
| Axios           | API requests      |
| Cheerio         | Website scraping  |
| SearXNG         | Free live search  |

---

# Recommended Models

## Fast and lightweight

```bash
ollama pull qwen2.5:3b
```

## Best balanced

```bash
ollama pull qwen2.5:7b
```

## Strong reasoning

```bash
ollama pull deepseek-r1:8b
```

---

# Project Structure

```txt
rydoc-ai/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatBox.jsx
│   │   │   ├── Message.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── node_modules/
│
├── server/
│   ├── routes/
│   │   └── chat.js
│   │
│   ├── services/
│   │   ├── ollama.js
│   │   └── search.js
│   │
│   ├── index.js
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

# MAC SETUP GUIDE

---

# Step 1 — Install Node.js

Download and install:

[https://nodejs.org](https://nodejs.org)

Verify installation:

```bash
node -v
npm -v
```

---

# Step 2 — Install Ollama

Download:

[https://ollama.com/download/mac](https://ollama.com/download/mac)

Install and open Ollama.

Verify:

```bash
ollama --version
```

---

# Step 3 — Pull AI Model

Recommended:

```bash
ollama pull qwen2.5:3b
```

Alternative:

```bash
ollama pull qwen2.5:7b
```

Test model:

```bash
ollama run qwen2.5:3b
```

Type:

```txt
hello
```

If AI responds, Ollama works correctly.

---

# Step 4 — Clone/Create Project

```bash
mkdir rydoc-ai
cd rydoc-ai
```

---

# BACKEND SETUP

---

# Step 5 — Create Server

```bash
mkdir server
cd server
npm init -y
```

---

# Step 6 — Install Backend Packages

```bash
npm install express cors axios cheerio dotenv
```

Install nodemon:

```bash
npm install nodemon --save-dev
```

---

# FRONTEND SETUP

---

# Step 7 — Create React App

Go back:

```bash
cd ..
```

Create frontend:

```bash
npm create vite@latest client -- --template react
```

Go inside:

```bash
cd client
```

Install packages:

```bash
npm install
```

---

# Step 8 — Install Frontend Packages

```bash
npm install axios react-markdown lucide-react framer-motion
```

Install Tailwind:

```bash
npm install tailwindcss @tailwindcss/vite
```

---

# RUN APPLICATION

---

# Terminal 1 — Start Ollama

```bash
ollama serve
```

---

# Terminal 2 — Start Backend

```bash
cd server
npm run dev
```

---

# Terminal 3 — Start Frontend

```bash
cd client
npm run dev
```

---

# OPEN IN BROWSER

Open:

```txt
http://localhost:5173
```

---

# WINDOWS SETUP GUIDE

---

# Install Node.js

Download:

[https://nodejs.org](https://nodejs.org)

Verify:

```powershell
node -v
npm -v
```

---

# Install Ollama

Download:

[https://ollama.com/download/windows](https://ollama.com/download/windows)

Verify:

```powershell
ollama --version
```

---

# Pull Model

```powershell
ollama pull qwen2.5:3b
```

---

# Run Ollama

```powershell
ollama serve
```

---

# Create Project

```powershell
mkdir rydoc-ai
cd rydoc-ai
```

---

# Backend Setup

```powershell
mkdir server
cd server
npm init -y
npm install express cors axios cheerio dotenv
npm install nodemon --save-dev
```

---

# Frontend Setup

```powershell
cd ..
npm create vite@latest client -- --template react
cd client
npm install
npm install axios react-markdown lucide-react framer-motion
npm install tailwindcss @tailwindcss/vite
```

---

# Run Everything

## Terminal 1

```powershell
ollama serve
```

## Terminal 2

```powershell
cd server
npm run dev
```

## Terminal 3

```powershell
cd client
npm run dev
```

---

# Open Browser

```txt
http://localhost:5173
```

---

# Troubleshooting

## Ollama not responding

Test:

```bash
ollama run qwen2.5:3b
```

---

## Backend not running

Test:

```txt
http://127.0.0.1:5000
```

---

## Frontend not loading

Test:

```txt
http://localhost:5173
```

---

## CORS errors

Ensure:

```javascript
app.use(cors())
```

exists in backend.

---

# Final Notes

RyDoc AI is designed to be:

* Local
* Private
* Free
* Customizable
* Developer-friendly

You now have a strong foundation for building your own AI platform.
