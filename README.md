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
ScreenShots 
<img width="1138" height="905" alt="Screenshot 2025-08-06 211101" src="https://github.com/user-attachments/assets/65c2ab27-0a18-4769-886d-69186567949b" />

<img width="1902" height="704" alt="Screenshot 2025-08-06 211038" src="https://github.com/user-attachments/assets/8e10d8ac-a93e-4787-8154-12af134ba3ea" />

<img width="1916" height="736" alt="Screenshot 2025-08-06 211020" src="https://github.com/user-attachments/assets/db1f66fb-0145-4827-be46-b00e2cf5ee2d" />

<img width="1918" height="908" alt="Screenshot 2025-08-06 210928" src="https://github.com/user-attachments/assets/4f48d9dc-5dfd-4464-844d-dd4b20f2afa2" />

<img width="1916" height="904" alt="Screenshot 2025-08-06 210907" src="https://github.com/user-attachments/assets/81802f55-efc1-49ff-b0f4-7febb701abaa" />

<img width="1911" height="880" alt="Screenshot 2025-08-06 210854" src="https://github.com/user-attachments/assets/fa28ba43-692b-400f-a27b-ecbeb69b110e" />

<img width="1917" height="696" alt="Screenshot 2025-08-06 210831" src="https://github.com/user-attachments/assets/b197c9ea-cba5-4a81-9565-1dfdc8a1de68" />

<img width="1902" height="819" alt="Screenshot 2025-08-06 210813" src="https://github.com/user-attachments/assets/1cc87f84-c75e-4bcc-aad8-82de5da1b2e5" />

<img width="1919" height="917" alt="Screenshot 2025-08-06 210754" src="https://github.com/user-attachments/assets/2bb76529-b29e-4c4d-a8c7-a7a3cc79ffa2" />

<img width="1918" height="911" alt="Screenshot 2025-08-06 210741" src="https://github.com/user-attachments/assets/ddc3226a-01e7-40a8-a364-d5a41c73308d" />

<img width="1919" height="905" alt="Screenshot 2025-08-06 210730" src="https://github.com/user-attachments/assets/bb0fd8d4-8f95-402a-ab3a-dddf6e2051ac" />

<img width="1919" height="809" alt="Screenshot 2025-08-06 210713" src="https://github.com/user-attachments/assets/66bb065f-dc34-4447-8141-25001f3b73e7" />

<img width="1919" height="909" alt="Screenshot 2025-08-06 210651" src="https://github.com/user-attachments/assets/417e3490-6de1-49fb-93a1-8d090d3fa67f" />

<img width="1896" height="822" alt="Screenshot 2025-08-06 210639" src="https://github.com/user-attachments/assets/24c05a46-ab59-44a9-8bdd-b2badfe81e21" />

<img width="1898" height="903" alt="Screenshot 2025-08-06 210626" src="https://github.com/user-attachments/assets/e1ea543b-febd-4e35-9dd1-c107338638f9" />

<img width="1893" height="907" alt="Screenshot 2025-08-06 210605" src="https://github.com/user-attachments/assets/f5d3269a-f4e7-4d1b-88a3-434f82596486" />


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

