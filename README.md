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
| Styling      | CSS / Tailwind |

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

<img width="1893" height="907" alt="Screenshot 2025-08-06 210605" src="https://github.com/user-attachments/assets/1a949184-a006-4f5c-810d-617d73d5c861" />

<img width="1898" height="903" alt="Screenshot 2025-08-06 210626" src="https://github.com/user-attachments/assets/c3489f83-0158-4ecd-85cf-d8ed7fb85656" />

<img width="1896" height="822" alt="Screenshot 2025-08-06 210639" src="https://github.com/user-attachments/assets/99fff91f-60d0-4b4e-8b4c-35b398c49704" />

<img width="1919" height="909" alt="Screenshot 2025-08-06 210651" src="https://github.com/user-attachments/assets/90692bc0-0df1-46fb-9052-92bf237d3a31" />

<img width="1919" height="809" alt="Screenshot 2025-08-06 210713" src="https://github.com/user-attachments/assets/39f32dfb-f38f-43ae-a6aa-3c8b505b1109" />

<img width="1919" height="905" alt="Screenshot 2025-08-06 210730" src="https://github.com/user-attachments/assets/88fcc154-b717-43ad-b3da-ff2739413c35" />

<img width="1918" height="911" alt="Screenshot 2025-08-06 210741" src="https://github.com/user-attachments/assets/bacabf2e-3598-41e8-a19b-e33ca459a02f" />

<img width="1919" height="917" alt="Screenshot 2025-08-06 210754" src="https://github.com/user-attachments/assets/793faa22-7f93-4f3f-837c-0586d952af99" />

<img width="1902" height="819" alt="Screenshot 2025-08-06 210813" src="https://github.com/user-attachments/assets/4249675c-104c-43e1-81d6-14473498e21a" />

<img width="1917" height="696" alt="Screenshot 2025-08-06 210831" src="https://github.com/user-attachments/assets/0e1879b7-555b-4266-943d-c598d78aab69" />

<img width="1911" height="880" alt="Screenshot 2025-08-06 210854" src="https://github.com/user-attachments/assets/fb157206-dd99-4f53-b41a-a0c93a8589aa" />

<img width="1916" height="904" alt="Screenshot 2025-08-06 210907" src="https://github.com/user-attachments/assets/fa144a73-4670-4e6a-bc58-e429b345087c" />

<img width="1918" height="908" alt="Screenshot 2025-08-06 210928" src="https://github.com/user-attachments/assets/3696ddd9-6d62-4056-bf7f-65834aff8829" />

<img width="1916" height="736" alt="Screenshot 2025-08-06 211020" src="https://github.com/user-attachments/assets/f3c7bf38-e01b-43c1-a39d-186823f8c6e9" />

<img width="1902" height="704" alt="Screenshot 2025-08-06 211038" src="https://github.com/user-attachments/assets/64c58a14-efc2-410e-aff5-9d28daf6d4d6" />

<img width="1138" height="905" alt="Screenshot 2025-08-06 211101" src="https://github.com/user-attachments/assets/da5894d2-25b6-4e40-854c-b7fc50a5a402" />






