# 🏥 Prescripto - Doctor Appointment Booking Platform

Prescripto is a full-stack healthcare appointment booking platform built with the MERN stack. It enables patients to book appointments online, doctors to manage schedules and appointments, and administrators to oversee platform operations through a dedicated dashboard.

## ✨ Features

### Patient Module

* User registration and authentication
* Browse doctors by specialty
* View doctor profiles
* Book appointments
* Manage appointments
* Update profile information

### Doctor Module

* Secure doctor login
* Dashboard with earnings and appointment statistics
* View and manage appointments
* Complete or cancel appointments
* Update profile details and availability

### Admin Module

* Secure admin authentication
* Dashboard analytics
* Add new doctors
* Manage doctors
* Manage appointments
* Monitor platform activity

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* React Toastify

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### Cloud Services

* Cloudinary (Image Uploads)

### Deployment

* Vercel

---

## 🔐 Authentication & Authorization

The application implements role-based access control using JWT tokens.

Roles:

* Patient
* Doctor
* Admin

Protected routes ensure users can only access authorized resources.

---

## 📂 Project Structure

```bash
prescripto/
├── frontend/
├── admin/
├── backend/
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Vishwak-Tech/prescripto.git
cd prescripto
```

### Backend Setup

```bash
cd backend
npm install
npm run server
```

Create a `.env` file:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin Setup

```bash
cd admin
npm install
npm run dev
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## 📈 Key Highlights

* Full-stack MERN application
* Role-based authentication and authorization
* Appointment scheduling system
* Real-time slot management
* Doctor and Admin dashboards
* Cloudinary image uploads
* Responsive design for desktop and mobile
* RESTful API architecture
* Production deployment on Vercel

---

## 📸 Screenshots

<img width="1920" height="1020" alt="Screenshot 2026-06-14 114152" src="https://github.com/user-attachments/assets/2e3a8077-946b-4be1-8d76-a89be1cf4a6b" />


---

## 👨‍💻 Author

Vishwak Koleti
