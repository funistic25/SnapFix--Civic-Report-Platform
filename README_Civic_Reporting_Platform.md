# 🏙️ Civic Reporting Platform  
### *(Public Maintenance Reporting System)*  

A smart community-driven platform that enables citizens to report public maintenance issues — such as potholes, garbage, or water leaks — with **images, descriptions, and real-time tracking**.  
The system leverages **AI**, **automation**, and **MERN stack** technology to make civic maintenance faster, smarter, and more transparent.  

---

## 🌟 Overview  

This project was developed as part of a **hackathon problem statement** focused on modernizing civic maintenance management.  
It allows citizens to report issues seamlessly, while officials can monitor, prioritize, and resolve them through automated workflows powered by AI.  

---

## 🚀 Highlights  

- 🧠 **AI-powered classification** — Detects issue type (pothole, garbage, leak, etc.) and identifies duplicates automatically.  
- 📍 **Smart location tagging** — Auto-captures and maps issue locations for better tracking.  
- ⚡ **Real-time updates** — Live dashboards built with Socket.io for instant synchronization.  
- 🧑‍💻 **Role-based dashboards** — Separate interfaces for users, officers/admins, and AI system.  
- 🔁 **Automated task routing** — Assigns tasks dynamically to relevant departments.  
- 👍 **Upvoting system** — Citizens can prioritize pressing community issues.  

---

## 🧩 Tech Stack  

| Layer | Technologies |
|-------|---------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Express.js, Socket.io |
| **Database** | MongoDB |
| **AI Module** | Python (TensorFlow / Scikit-learn) |
| **Others** | REST API, JWT Authentication, Cloudinary (for image storage) |

---

## 🧠 AI Integration  

The platform integrates a **custom ML model** that:  
- Classifies uploaded images into predefined categories (pothole, garbage, etc.)  
- Detects duplicate issues using image similarity  
- Sends predictions to the backend for routing and prioritization  

---

## 🖥️ Dashboards  

| Citizen Dashboard | Officer Dashboard | AI Classification |
|-------------------|-------------------|-------------------|
| ![User UI](assets/user_dashboard.png) | ![Admin UI](assets/admin_dashboard.png) | ![AI](assets/ai_model.png) |

---

## ⚙️ Setup Instructions  

1. **Clone the Repository**
   ```bash
   git clone https://github.com/<your-username>/civic-reporting-platform.git
   ```

2. **Install Dependencies**
   ```bash
   # Backend
   cd server && npm install

   # Frontend
   cd ../client && npm install
   ```

3. **Add Environment Variables**
   ```bash
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_URL=<your_cloudinary_api_key>
   ```

4. **Run the Application**
   ```bash
   # Run backend
   npm run dev

   # Run frontend
   npm start
   ```

---

## 📊 Workflow  

1. Citizen submits a report with image + description.  
2. AI model classifies the issue and checks for duplicates.  
3. The issue is routed to the relevant officer/department.  
4. Officer updates progress via the dashboard.  
5. Citizens track status in real-time and upvote important reports.  

---

## 🚧 Future Improvements  

- 🗺️ Map-based dashboard for real-time issue visualization.  
- 📱 PWA support for mobile accessibility.  
- 🔮 AI severity prediction to auto-prioritize high-impact reports.  

---

## 🧑‍💻 Author  

**Samiullah Syed Hussain**  
*Full Stack Developer | AI & Product Enthusiast*  

🔗 [LinkedIn](https://linkedin.com/in/samiullah-syed-hussain)  
💻 [GitHub](https://github.com/<your-username>)  
