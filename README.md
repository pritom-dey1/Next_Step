Project Overview: 
Next Step is a career counseling web platform designed to guide users toward their ideal career paths based on interests, skills, and goals.
It provides personalized recommendations, resources, and tools to help users plan their future effectively

Tech Stack Used: 
Frontend: React.js, Tailwind CSS, DaisyUI
Backend: Node.js, Express.js
Database: MongoDB / Firebase (choose the one you used)
Additional Tools: React Router, React Toastify, Axios, Vite

Clone the Repository: 
git clone https://github.com/pritom-dey1/Next_Step.git
cd Next_Step

Install Dependencies: 
# Frontend setup
cd Frontend
npm install

# Backend setup
cd ../Backend
npm install

Run the Project: 
# Run frontend (from Frontend folder)
npm run dev
# Run backend (from Backend folder)
npm start


Environment Configuration: 
--- Create a .env file in your backend--- 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_api_key (if applicable)

--- For Frontend : 
VITE_API_URL=http://localhost:5000

Seed Data: 
# Run seed command
npm run seed
