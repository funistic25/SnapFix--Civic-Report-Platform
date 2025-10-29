# 🏙️ Snapfix - Civic Reporting Platform  
### *(Public Maintenance Reporting System)*  

A smart community-driven platform that enables citizens to report public maintenance issues — such as potholes, garbage, or water leaks — with **images, descriptions, and real-time tracking**.  
The system leverages **AI**, **automation**, and **MERN stack** technology to make civic maintenance faster, smarter, and more transparent.  

---

## 🌟 Overview  

This project was developed as part of a **hackathon problem statement** focused on modernizing civic maintenance management.  
It allows citizens to report issues seamlessly, while officials can monitor, prioritize, and resolve them through automated workflows powered by AI.  

---

## 🌐 Live Demo
🎥 **YouTube Demo:** [Watch on YouTube](https://youtu.be/u7jqRsIpRh0)
🚀 **Deployed App:** [Try it Live on Mobile](https://sih-1-frontend.vercel.app/)

---

## 🚀 Highlights  

- 🧾 **Issue Reporting:** Users can submit reports with description, location, and photos.  
- 🧠 **AI Image Classification:** ML model automatically categorizes issues (e.g., road, garbage, water leak).  
- 🗺️ **Geolocation Integration:** Auto-fetches user’s current location with reverse geocoding.  
- ☁️ **Image Storage:** Uses **Cloudinary** for scalable image upload and storage.  
- 💬 **Real-time Updates:** **Socket.io** enables live updates when new issues are reported or resolved.  
- 👮 **Admin Dashboard:** Officials can view, verify, and update status of reports.  
- 📱 **Responsive UI:** Built with React for mobile and desktop.

---

## 🧩 Tech Stack  

| Layer | Technology |
|-------|-------------|
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ORM) |
| Real-time | Socket.io |
| Cloud Storage | Cloudinary |
| AI Model | Custom ML model (image classification using AutoML(Hugging Face)) |
| Deployment | ( Render / Vercel ) |

---

## 🧠 AI Integration  

The platform integrates a **custom ML model** that:  
- Classifies uploaded images into predefined categories (pothole, garbage, etc.)  
- Detects duplicate issues using image similarity  
- Sends predictions to the backend for routing and prioritization  

---

## ⚙️ Setup Instructions  

1. **Clone the Repository**
   ```bash
   git clone https://github.com/funistic25/civic-reporting-platform.git
   ```

2. **Install Dependencies**
   ```bash
   # Backend
   cd server1/backend
   npm install

   # Frontend
   cd ../client/frontend
   npm install
   ```

3. **Run the Application**
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

- 🗺️ Integration with municipal dashboards.  
- 📱 Analytics dashboard for report insights.  
- 🔮 AI severity prediction to auto-prioritize high-impact reports.  

---

## 🧑‍💻 Author  

**Samiullah Syed Hussain**  
*AI Engineer | ML Developer | Problem-Solving Enthusiast*  

🔗 [LinkedIn](https://linkedin.com/in/samiullahsyedhussain)  
💻 [GitHub](https://github.com/funistic25)  
