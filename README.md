# 🩺 Doctor Appointment Booking System (MERN)

A **full‑stack MERN** web application for booking doctor appointments online with secure payments, admin management, and user-friendly interfaces for both patients and doctors.

---

## 📌 Overview

This app provides a smooth doctor–patient appointment booking experience.  
Patients can search and book doctors, view their profiles, and make payments via Stripe.  
Admins can manage doctor profiles, including qualifications, specializations, and availability.  
Both user and admin panels are **protected with authentication and authorization**.

---

## ✨ Features

### 🏠 Public Pages
- **Home Page**  
  - Hero section introducing the platform  
  - Highlighted services section  
  - "Our Doctors Team" dynamically displayed from admin panel  
  - Swiper‑based review/testimonial section  
  - FAQs section  
  - Footer with useful links

- **Find a Doctor**  
  - Search/filter doctors by name, specialization, qualification, or hospital  
  - View detailed doctor profile pages with qualifications, university, hospital, bio, specializations, timing slots, and reviews

- **Services Page**  
  - Detailed description of services provided

- **Contact Us Form**  
  - For patient inquiries or support

---

### 👨‍⚕️ Doctor Profiles
- Managed by **Admin only**
- Include:
  - Photo (Cloudinary upload)
  - Qualifications & Specializations
  - University & Hospital
  - Bio & About section
  - Available timing slots
  - Reviews & Ratings from patients

---

### 🧾 Booking & Payments
- Patients can book appointments with available doctors
- **Stripe payment integration** for secure online payments
- Booking details include:
  - Doctor name, qualification, specialization
  - Appointment date & time
  - Price
  - Payment status (Paid/Unpaid)

---

### 🛡 Authentication & Authorization
- **Protected admin panel**
  - Accessible only after logging in with valid doctor/admin credentials
  - Passwords encrypted with **bcrypt**
- Separate **User Panel**
  - Displays user's bookings and profile details
  - Ability to update profile information

---

### 💬 Reviews & Ratings
- Patients can add reviews after appointment
- Rate doctors out of 5 stars
- Reviews show:
  - User's photo (Cloudinary)
  - Comment
  - Rating

---

## 🛠 Tech Stack

| Layer        | Technology |
|--------------|------------|
| Frontend     | React.js, Swiper.js |
| Backend      | Node.js, Express.js |
| Database     | MongoDB |
| Auth         | JWT, bcrypt |
| File Upload  | Cloudinary |
| Payments     | Stripe |
| Styling      | CSS / Tailwind (if applicable) |

---

---

## ⚙️ Installation & Setup

**1️⃣ Clone repository**
```bash
git clone https://github.com/yourusername/doctor-appointment-app.git
cd doctor-appointment-app
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm start

SCREENSHOTS

Home Page

Find a Doctor

Doctor Profile

User Dashboard

Admin Panel



## 📂 Folder Structure

