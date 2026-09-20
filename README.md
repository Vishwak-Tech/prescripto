# Prescripto

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js 22" />
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/AWS-EC2-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=black" alt="AWS EC2" />
  <img src="https://img.shields.io/badge/Nginx-Reverse_Proxy-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
  <img src="https://img.shields.io/badge/HTTPS-TLS-2E7D32?style=for-the-badge&logo=letsencrypt&logoColor=white" alt="HTTPS" />
</p>

<p align="center">
  <strong>Production-grade healthcare appointment platform built with the MERN stack and deployed with a complete Docker + AWS + CI/CD workflow.</strong>
</p>

<p align="center">
  <a href="https://prescripto.shop/">Live Application</a> •
  <a href="https://prescripto.shop/admin/">Admin Panel</a> •
  <a href="https://github.com/Vishwak-Tech/prescripto">Source Code</a>
</p>

---

## 📌 Overview

**Prescripto** is a full-stack healthcare appointment platform connecting patients, doctors, and administrators through role-based workflows.

Patients can discover doctors, view profiles, manage their accounts, book appointments, and make online payments. Doctors can manage availability and appointments. Administrators can manage doctors, appointments, and platform activity.

The project goes beyond a typical MERN application: it is **containerized, continuously built, published to GitHub Container Registry, deployed to AWS EC2, served through Nginx, secured with HTTPS, and operated with a SHA-based release workflow.**

> **Production URL:** https://prescripto.shop/

---

## ✨ Features

### 👤 Patient

- User registration and authentication
- Browse doctors by specialty
- View doctor profiles
- Appointment booking
- Appointment management
- Profile management
- Online appointment payments with Razorpay
- Protected user workflows

### 👨‍⚕️ Doctor

- Secure doctor authentication
- Doctor dashboard
- Appointment statistics
- Earnings information
- View and manage appointments
- Complete or cancel appointments
- Availability management
- Profile management

### 🛡️ Admin

- Secure admin authentication
- Platform dashboard
- Dashboard analytics
- Add doctors
- Manage doctors
- Manage appointments
- Monitor platform activity

### 💳 Payments

- Razorpay order creation
- Browser-side Razorpay Checkout initialization
- Payment response handling
- Backend payment verification
- Production payment flow

### 🖼️ Media

- Multipart file uploads with Multer
- Cloudinary-based media storage

---

## 🏗️ Architecture

```text
                             Internet
                                │
                                ▼
                     ┌─────────────────────┐
                     │   prescripto.shop   │
                     │     HTTPS / TLS     │
                     └──────────┬──────────┘
                                │
                                ▼
                         ┌─────────────┐
                         │    Nginx    │
                         │ Reverse     │
                         │ Proxy       │
                         └──────┬──────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
             /               /admin/            /api/
              │                 │                 │
              ▼                 ▼                 ▼
        ┌───────────┐     ┌───────────┐     ┌───────────┐
        │ Frontend  │     │   Admin   │     │  Backend  │
        │  :5173    │     │   :5174   │     │   :4000   │
        └───────────┘     └───────────┘     └─────┬─────┘
                                                  │
                                      ┌───────────┴───────────┐
                                      ▼                       ▼
                                  MongoDB                 Razorpay
```

### Production request routing

| Route | Destination |
|---|---|
| `/` | Frontend → `127.0.0.1:5173` |
| `/admin/` | Admin → `127.0.0.1:5174` |
| `/api/` | Backend → `127.0.0.1:4000` |

The application ports are bound to localhost. Nginx is the public entry point.

---

## 🚀 Production Deployment

Prescripto currently runs on:

- **AWS EC2**
- **Amazon Linux 2023**
- **Docker + Docker Compose**
- **Nginx**
- **Let's Encrypt / Certbot**
- **GitHub Actions**
- **GitHub Container Registry (GHCR)**
- **Custom domain:** `prescripto.shop`

### Production topology

```text
GitHub
   │
   │ push to main
   ▼
GitHub Actions
   │
   ├── Install dependencies
   ├── Lint
   ├── Build frontend
   ├── Build admin
   ├── Build Docker images
   └── Push images to GHCR
             │
             ▼
        SSH to EC2
             │
             ▼
        deploy.sh
             │
             ├── Pull latest main
             ├── Set IMAGE_TAG
             ├── docker compose pull
             ├── docker compose up -d
             ├── Prune unused images
             └── Health check
```

---

## 🐳 Docker

The production application consists of three containers:

```text
prescripto-backend
prescripto-frontend
prescripto-admin
```

Production port mappings:

```text
Backend   127.0.0.1:4000 → container:4000
Frontend  127.0.0.1:5173 → container:4173
Admin     127.0.0.1:5174 → container:4173
```

The frontend and admin applications are built with Vite and served with Vite Preview inside their containers.

### SHA-based images

Images are tagged with the Git commit SHA instead of relying only on `latest`:

```text
ghcr.io/vishwak-tech/prescripto-backend:<commit-sha>
ghcr.io/vishwak-tech/prescripto-frontend:<commit-sha>
ghcr.io/vishwak-tech/prescripto-admin:<commit-sha>
```

This provides traceable releases and supports deterministic rollback.

---

## 🔄 CI/CD

Every push to `main` triggers the production workflow.

```text
git push
   │
   ▼
Checkout
   │
   ▼
Install dependencies
   │
   ▼
Lint
   │
   ▼
Build frontend + admin
   │
   ▼
Docker build
   │
   ▼
Push images to GHCR
   │
   ▼
SSH to EC2
   │
   ▼
Deploy with deploy.sh
   │
   ▼
Health check
   │
   ▼
Production
```

### GitHub Actions responsibilities

- Checkout source
- Set up Node.js
- Run `npm ci`
- Lint frontend
- Lint admin
- Build frontend
- Build admin
- Authenticate to GHCR
- Build backend/frontend/admin images
- Push SHA-tagged images
- Deploy the selected release to EC2

### Deployment safety

The deployment script uses:

```bash
set -e
```

so a failed command stops the deployment sequence.

A post-deployment health check verifies that the application is reachable through Nginx.

---

## 🔐 Security

### Network exposure

Only the intended public entry points are exposed:

```text
22   → SSH
80   → HTTP
443  → HTTPS
```

Application services remain bound to localhost:

```text
127.0.0.1:4000
127.0.0.1:5173
127.0.0.1:5174
```

### SSH

Production access uses SSH key authentication.

Configured SSH hardening includes:

```text
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

### Secrets

Production backend secrets are stored outside Git in:

```text
backend/.env
```

The production file uses restrictive permissions:

```text
-rw-------
```

Do not commit `.env` files or private credentials.

### Frontend environment variables

The Razorpay **Key ID** is a public client-side configuration value required by Razorpay Checkout.

The Razorpay **Key Secret must never be exposed in frontend code or a `VITE_*` variable.** It belongs on the backend/server side.

---

## 💳 Razorpay Payment Flow

```text
Patient
   │
   ▼
Request appointment payment
   │
   ▼
Backend creates Razorpay order
   │
   ▼
Frontend receives order
   │
   ▼
Razorpay Checkout opens
   │
   ▼
Payment completed
   │
   ▼
Frontend receives payment response
   │
   ▼
Backend verifies payment
   │
   ▼
Appointment/payment state updated
```

The production payment flow has been tested successfully.

---

## 🌐 DNS + HTTPS

Production domain:

```text
https://prescripto.shop/
```

DNS:

```text
A      @      → EC2 public IP
CNAME  www    → prescripto.shop
```

HTTP traffic is redirected to HTTPS.

### TLS

HTTPS is provided using Let's Encrypt and Certbot.

The certificate covers:

```text
prescripto.shop
www.prescripto.shop
```

Automatic renewal is enabled through the Certbot systemd timer.

Validation commands:

```bash
sudo nginx -t
sudo certbot certificates
sudo certbot renew --dry-run
```

---

## 📂 Repository Structure

```text
prescripto/
├── frontend/                 # Patient-facing React application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── admin/                    # Admin React application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── backend/                  # Express REST API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy.yml       # CI/CD pipeline
│
├── docker-compose.yml       # Production service definitions
├── README.md
└── .gitignore
```

> The exact folder structure may evolve as the application grows.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS, Axios |
| Admin | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT, bcrypt |
| File Uploads | Multer |
| Media Storage | Cloudinary |
| Payments | Razorpay |
| Containers | Docker, Docker Compose |
| CI/CD | GitHub Actions |
| Registry | GitHub Container Registry |
| Cloud | AWS EC2 |
| Reverse Proxy | Nginx |
| DNS | Hostinger DNS |
| TLS | Let's Encrypt / Certbot |

---

# 💻 Local Development

## Prerequisites

Install:

- Node.js
- npm
- Git
- MongoDB or access to a MongoDB deployment
- Cloudinary account
- Razorpay account if payment functionality is required

---

## 1. Clone

```bash
git clone https://github.com/Vishwak-Tech/prescripto.git
cd prescripto
```

---

## 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env` with the variables required by the backend configuration, for example:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
```

> Use the variable names expected by the current backend code. Never commit real values.

Start the backend using the project's configured development command, for example:

```bash
npm run server
```

---

## 3. Frontend

```bash
cd frontend
npm install
```

Create:

```text
frontend/.env
```

Example:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=
```

Start:

```bash
npm run dev
```

---

## 4. Admin

```bash
cd admin
npm install
```

Create:

```text
admin/.env
```

Example:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start:

```bash
npm run dev
```

---

# 🧪 Testing

Automated testing is the **next planned improvement** for Prescripto.

The intended testing strategy is:

```text
Unit Tests
    ↓
Component Tests
    ↓
API / Integration Tests
    ↓
End-to-End Tests
    ↓
CI
    ↓
Build
    ↓
Docker
    ↓
Deploy
```

### Planned coverage

#### Frontend

- React Testing Library
- User interactions
- Forms and validation
- Protected UI states
- Critical appointment flows

#### Backend

- API integration tests
- Authentication/authorization
- Appointment endpoints
- Doctor endpoints
- Payment verification

#### End-to-End

- Patient login
- Doctor discovery
- Appointment booking
- Payment flow
- Admin workflows

### Deployment principle

> **Tests should pass before a production deployment is allowed.**

---

# 📊 Production Verification

The production system has been audited after deployment.

### Application

```text
https://prescripto.shop/                    → 200 OK
https://prescripto.shop/admin/              → 200 OK
https://prescripto.shop/api/admin/dashboard → 200 OK
```

### Containers

All three services were verified running:

```text
Backend
Frontend
Admin
```

### Backend logs

Verified:

```text
Server Is Running on PORT 4000
Database Connected
```

### Nginx

Verified:

```text
systemctl status nginx
nginx -t
```

### TLS

Verified:

- Valid certificate
- `prescripto.shop`
- `www.prescripto.shop`
- Automatic renewal timer enabled
- Renewal dry-run completed successfully

### Security

Verified:

- Application ports bound to localhost
- SSH key authentication
- Root SSH login disabled
- Password SSH authentication disabled
- Backend `.env` protected with restrictive permissions

### Resources

Current single-server deployment is intentionally lightweight.

The production audit identified:

- CPU load: low
- RAM: limited by the `t3.micro` size
- Disk: monitor growth as Docker images/logs accumulate

---

# 🔁 Rollback Strategy

Every release is identified by its Git commit SHA.

Example:

```text
Release A → 77fc010...
Release B → 2fcf70b...
Release C → 8031091...
Release D → 9f201d7...
Release E → 3b0e6bf...
```

If a future release causes a production issue, a verified previous SHA can be redeployed:

```bash
cd ~/prescripto
./deploy.sh <KNOWN_GOOD_COMMIT_SHA>
```

The deployment script then pulls the corresponding images and recreates the services.

### Why SHA-based releases?

Using:

```text
image:<commit-sha>
```

instead of only:

```text
image:latest
```

makes releases:

- Traceable
- Auditable
- Easier to debug
- Easier to roll back

---

# 🔧 Production Troubleshooting

### Check containers

```bash
docker ps
```

### Check Compose

```bash
cd ~/prescripto
docker compose ps
```

### Backend logs

```bash
docker compose logs --tail=50 backend
```

### Frontend logs

```bash
docker compose logs --tail=30 frontend
```

### Admin logs

```bash
docker compose logs --tail=30 admin
```

### Nginx

```bash
sudo systemctl status nginx --no-pager
sudo nginx -t
```

### Ports

```bash
sudo ss -tulpn
```

### Memory

```bash
free -h
```

### Disk

```bash
df -h
```

### Load

```bash
uptime
```

### Certificate

```bash
sudo certbot certificates
```

---

# 🗺️ Roadmap

## Completed

- [x] MERN full-stack application
- [x] Patient workflows
- [x] Doctor workflows
- [x] Admin dashboard
- [x] JWT authentication
- [x] Role-based authorization
- [x] Appointment scheduling
- [x] Razorpay payments
- [x] Cloudinary media
- [x] Dockerization
- [x] Docker Compose
- [x] AWS EC2 deployment
- [x] Nginx reverse proxy
- [x] Custom domain
- [x] HTTPS / TLS
- [x] GitHub Actions CI/CD
- [x] GHCR image registry
- [x] SHA-based releases
- [x] Production security hardening
- [x] Production troubleshooting
- [x] Rollback strategy

## Next

- [ ] Unit testing
- [ ] React Testing Library coverage
- [ ] Backend integration/API tests
- [ ] End-to-end testing
- [ ] Test-gated CI/CD
- [ ] Infrastructure as Code with Terraform
- [ ] Better production observability
- [ ] Automated alerting
- [ ] Database backup/recovery strategy
- [ ] Advanced AWS architecture
- [ ] Horizontal scaling when required

---

# 🤝 Contributing

Contributions are welcome.

### 1. Fork the repository

### 2. Create a branch

```bash
git checkout -b feature/your-feature
```

### 3. Make and test your changes

### 4. Commit

```bash
git add .
git commit -m "feat: describe your change"
```

### 5. Push

```bash
git push origin feature/your-feature
```

### 6. Open a Pull Request

Keep pull requests focused and explain the motivation and impact of the change.

---

# 👨‍💻 Author

## Vishwak Koleti

**Full Stack Developer | Backend | DevOps | AI**

- GitHub: https://github.com/Vishwak-Tech
- LinkedIn: https://www.linkedin.com/in/vishwak-koleti-tech
- Production: https://prescripto.shop/

---

## ⭐ Project Highlights

Prescripto represents an end-to-end engineering workflow:

```text
                    DEVELOPMENT
                         │
                         ▼
                       Git
                         │
                         ▼
                      GitHub
                         │
                         ▼
                 GitHub Actions
                  CI / Build
                         │
                         ▼
                       Docker
                         │
                         ▼
                       GHCR
                         │
                         ▼
                     AWS EC2
                         │
                         ▼
                       Nginx
                         │
                         ▼
                    HTTPS / TLS
                         │
                         ▼
                  prescripto.shop
```

> **Built not only to demonstrate full-stack development, but to demonstrate how a real application can be packaged, deployed, secured, automated, verified, and operated in production.**

---

<p align="center">
  <strong>Built with ❤️ by Vishwak Koleti</strong>
</p>
