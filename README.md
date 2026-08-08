# 🏥 Prescripto

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white)

<br />

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)

</p>

> A full-stack healthcare appointment booking platform built with the MERN stack.

Prescripto connects patients, doctors, and administrators through a role-based healthcare platform. Patients can discover doctors and book appointments, doctors can manage their schedules and appointments, and administrators can manage doctors, appointments, and overall platform activity.

---

## ✨ Features

### 👤 Patient Module

- User registration and authentication
- Browse doctors by specialty
- View detailed doctor profiles
- Book appointments
- Manage appointments
- Update profile information

### 👨‍⚕️ Doctor Module

- Secure doctor authentication
- Doctor dashboard
- Earnings and appointment statistics
- View and manage appointments
- Complete or cancel appointments
- Manage profile information
- Manage availability

### 🛡️ Admin Module

- Secure admin authentication
- Platform dashboard
- Dashboard analytics
- Add new doctors
- Manage doctors
- Manage appointments
- Monitor platform activity

---

## 🔐 Authentication & Authorization

Prescripto uses **JWT-based authentication** with role-based access control.

The platform supports three user roles:

| Role | Access |
|------|--------|
| 👤 Patient | Browse doctors, manage profile, book and manage appointments |
| 👨‍⚕️ Doctor | Manage appointments, availability, profile, and doctor dashboard |
| 🛡️ Admin | Manage doctors, appointments, and platform operations |

Protected routes ensure users can only access resources authorized for their role.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, React Router, Axios, Tailwind CSS, React Toastify |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT |
| File Uploads | Multer |
| Cloud Storage | Cloudinary |
| Deployment | Vercel |

---

## 🏗️ Application Architecture

Prescripto is organized into three primary applications:

```text
                    ┌─────────────────┐
                    │    Prescripto   │
                    │    Platform     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ Patient  │   │  Doctor  │   │  Admin   │
        │ Frontend │   │  Module  │   │ Dashboard│
        └────┬─────┘   └────┬─────┘   └────┬─────┘
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                     ┌──────────────┐
                     │ REST API     │
                     │ Express.js   │
                     └──────┬───────┘
                            │
                    ┌───────┴────────┐
                    ▼                ▼
              ┌──────────┐    ┌────────────┐
              │ MongoDB  │    │ Cloudinary │
              └──────────┘    └────────────┘
```

---

## 📂 Project Structure

```text
prescripto/
├── frontend/
├── admin/
├── backend/
├── screenshots/
│   ├── patient-home.png
│   ├── doctor-dashboard.png
│   ├── admin-dashboard.png
│   ├── appointment-booking.png
│   └── doctor-profile.png
└── README.md
```

### Frontend

Patient-facing application for discovering doctors, managing profiles, and booking appointments.

### Admin

Administrative dashboard for managing doctors, appointments, and platform activity.

### Backend

Express.js REST API responsible for authentication, appointment management, doctor management, and database operations.

---

# 🚀 Getting Started

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- MongoDB database
- Cloudinary account

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Vishwak-Tech/prescripto.git

cd prescripto
```

---

## ⚙️ Backend Setup

Navigate to the backend:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Start the backend server:

```bash
npm run server
```

The backend will run on the port configured by the application.

---

## 🌐 Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
npm install
```

Create:

```text
frontend/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

---

## 🛡️ Admin Setup

Open another terminal:

```bash
cd admin
npm install
```

Create:

```text
admin/.env
```

Add:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin application:

```bash
npm run dev
```

---

# 🔄 Application Flow

### Patient

```text
Register / Login
       ↓
Browse Doctors
       ↓
Select Specialty
       ↓
View Doctor Profile
       ↓
Select Appointment
       ↓
Book Appointment
       ↓
Manage Appointment
```

### Doctor

```text
Doctor Login
      ↓
Doctor Dashboard
      ↓
View Appointments
      ↓
Manage Availability
      ↓
Complete / Cancel Appointment
      ↓
Update Profile
```

### Admin

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Manage Doctors
     ↓
Manage Appointments
     ↓
View Platform Activity
```

---

# 📅 Appointment Management

Prescripto provides an appointment scheduling workflow that allows patients to book available slots while doctors can manage their appointments and availability.

Key capabilities include:

- Appointment booking
- Slot management
- Appointment status management
- Appointment completion
- Appointment cancellation
- Doctor availability management

---

# 🖼️ Image & Media Management

Prescripto uses:

- **Multer** for handling file uploads
- **Cloudinary** for cloud-based image storage

This allows doctor profile images and other uploaded media to be handled separately from the main application server.

---

# 📸 Screenshots
### 🏠 Homepage

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/8418c469-b1a1-4657-bc86-d526f2b1524d" />

### 🏠 Patient Application

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/064f494c-6f9b-4f96-80c9-9ee021a5d26e" />

### 👨‍⚕️ Doctor Dashboard

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/48ba82b9-78f4-4201-9156-805c204fa970" />

### 🛡️ Admin Dashboard

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/da9042b2-3d4d-4cee-939a-0c7aa4d559ea" />

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/a76c3ae4-e124-4abf-ab03-2197ed4b7f87" />

### 📅 Appointment Booking

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/db3f75d8-b7eb-464b-8590-46c236132304" />

### 👤 Doctor Profile

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/e42486d1-e41a-44fc-8d41-19ecc50e51df" />

---

## 🌐 Live Demo

<p align="center">

<a href="https://prescripto-frontend-tau-five.vercel.app">
  <img src="https://img.shields.io/badge/Live%20Demo-Prescripto-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
</a>

</p>

**Production:**  
https://prescripto-frontend-tau-five.vercel.app

---

# 🔌 API

The backend exposes RESTful APIs used by the patient frontend, doctor functionality, and admin dashboard.

The API covers application areas including:

- Authentication
- User management
- Doctor management
- Appointment management
- Profile management
- Availability management

> Detailed endpoint documentation can be added as the API documentation is formalized.

---

# 🔒 Security

The application uses:

- JWT authentication
- Role-based authorization
- Protected routes
- Environment variables for sensitive credentials
- Cloudinary credentials stored outside the source code

> Never commit `.env` files or API credentials to the repository.

---

# 📈 Key Highlights

- Full-stack MERN application
- Three-role healthcare platform
- JWT-based authentication
- Role-based authorization
- Appointment scheduling system
- Slot management
- Doctor and Admin dashboards
- Cloudinary image uploads
- RESTful API architecture
- Responsive frontend
- Production deployment with Vercel

---

# 🧪 Testing

The current project does not include a documented automated testing suite.

Before deployment, manually verify the following core workflows:

- User registration and login
- Doctor browsing
- Doctor profile viewing
- Appointment booking
- Appointment management
- Doctor availability
- Admin doctor management
- Admin appointment management
- Image uploads
- Protected routes

---

# 🗺️ Roadmap

Potential future improvements:

- Automated unit and integration testing
- Expanded appointment analytics
- Improved notification system
- Enhanced doctor search and filtering
- More detailed API documentation
- Additional healthcare workflow features

---

# 🤝 Contributing

Contributions and suggestions are welcome.

### 1. Fork the repository

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

### 3. Commit your changes

```bash
git add .
git commit -m "feat: describe your change"
```

### 4. Push the branch

```bash
git push origin feature/your-feature
```

### 5. Open a Pull Request

Please keep contributions focused and provide a clear description of the changes.

---

# 👨‍💻 Author

**Vishwak Koleti**

GitHub:  
https://github.com/Vishwak-Tech

---

<p align="center">
  Built with React, Node.js, Express, MongoDB, and Cloudinary.
</p>
