# 🚴‍♂️ Bike Shop Application

A **full-stack e-commerce platform** for bike enthusiasts. This app includes role-based authentication, dynamic product management, SurjoPay payment integration, order tracking, and a responsive, user-friendly interface.

---

## 🔗 Live Demo

- 🌐 Frontend: [bike-store-b4-a4-client.vercel.app](https://bike-store-b4-a4-client.vercel.app/)
- 🔌 Backend: [bike-store-b4-a4-server.vercel.app](https://bike-store-b4-a4-server.vercel.app/)
## Admin:
-  email: rebakpi@gmail.com
- password: 123456
## User:
- email: tohmina@gmail.com
- password: 123456


---

## 🎯 Project Overview

The Bike Shop application is designed to offer a complete shopping experience with:

- 🔐 Secure login/registration with role-based access
- 🛍 Product listing, search, filters, and details
- 💳 Checkout system with SurjoPay integration
- 🧑‍💼 Dashboards for admin and customers
- 🚚 Order management and tracking

---

## 🚀 Core Features 

### 🧾 1. User Registration & Authentication

- Role-based login system (Customer by default, Admin manually set)
- JWT-based secure route access
- Passwords hashed using bcrypt
- Logout clears token and redirects to login

### 🌐 2. Public Pages

- **Home Page**: Hero banner, featured bikes, testimonials, footer
- **All Products**:
  - Filter by brand, category, price, and availability
  - Keyword-based search
- **Product Details**: Info, price, description, "Buy Now" button
- **About Page**: Shop mission and story

### 🔒 3. Private Pages

- **Checkout Page**:
  - Stock validation
  - SurjoPay payment integration
- **User Dashboard**:
  - Order history
  - Profile management
  - Password update with current verification
- **Admin Dashboard**:
  - Manage Users (deactivate)
  - Manage Products (CRUD)
  - Manage Orders (CRUD)

---

## 🎨 UI/UX Design 

- Fully responsive (mobile-first design)
- Custom loading states for API calls
- User-friendly error messages
- Toasts for login success, orders, and errors

---

## 🌟 Bonus Features

### 📦 Order Tracking

#### ➤ User Dashboard:
- Track order status: Pending → Processing → Shipped → Delivered
- ETA and progress bar

#### ➤ Admin Dashboard:
- Update order status via dropdown
- Set delivery date and timeline

---

## 🛠 Backend Architecture

- MongoDB Atlas for data storage
- Express.js APIs for user, product, and order management
- SurjoPay for secure payment gateway integration

### 🧪 Key Capabilities

- Authentication with JWT and bcrypt
- Middleware for route protection
- Paginated & filterable API endpoints
- Error handling with consistent messages

---

## 🧩 Tech Stack

### Frontend

- React.js
- Tailwind CSS
- React Router
- Axios
- React Query
- AOS (Animations)

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT & bcrypt
- SurjoPay API

---

## 📁 Project Setup

### 🖥 Client

```bash
git clone https://github.com/Rebakum/Bike-store-B4-A4-client.git
cd Bike-store-B4-A4-client
npm install
