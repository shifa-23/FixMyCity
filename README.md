fixmycity
🌆 FlixMyCity - Civic Issue Reporting Platform

*FlixMyCity* is a full-stack web platform built for the *Samadhan Hackathon* to help citizens report and track civic issues such as potholes, garbage accumulation, and broken infrastructure. The system connects users with authorities and allows faster resolution using real-time tracking and AI support.

---

## 🚀 Key Features

- 📌 Easy issue reporting with descriptions and photos
- 🌍 Auto-location tagging via browser
- ⏱️ Real-time issue status tracking
- 🔒 User authentication and admin portal
- 🤖 AI-powered chatbot support
- 📊 Dashboard for issue analysis and response tracking

---

## 🛠️ Tech Stack

### 🎨 Frontend
- React.js
- HTML5 + CSS3
- Tailwind CSS
- Axios

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- bcrypt.js
- jsonwebtoken
- cors

### 🧠 AI Integration
- *OpenAI API* or *Dialogflow* based chatbot integration
- Trained to assist users in reporting issues, getting updates, and answering FAQs

---

## 🧑‍💻 Folder Structure

flixmycity/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── public/
│ ├── src/
│ └── package.json


## ⚙️ Setup Instructions

### 🖧 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
Create a .env file:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/flixmycity
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy
Edit
node server.js
Server will run on http://localhost:5000

🖥️ Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
npm install
Start the frontend server:

bash
Copy
Edit
npm start
App will open in browser at http://localhost:3000

👨‍👩‍👧‍👦 Team Members & Their Contributions
Name	Role	Responsibilities
Shikha Gupta	Team Leader & Backend Support	Scheduled meetings, shared updates, helped in backend logic
Shifa Praveen	Frontend Developer	Designed core UI pages and handled responsiveness
Aman Kumar	Frontend Support	Assisted in frontend bug fixing, style improvements
Vinayak Pandey	Backend & AI Developer	Developed APIs, MongoDB schema, and integrated AI chatbot
