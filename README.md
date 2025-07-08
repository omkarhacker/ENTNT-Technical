# 🦷 ENTNT Dental Center – Frontend Application

This is a **frontend-only** React-based dental management system for a fictional clinic named **ENTNT Dental Center**. It includes role-based dashboards for Admin and Patient users, with basic authentication and data storage handled via `localStorage`.

---

## 🚀 Features

- 🔐 Role-based login (Admin & Patient)
- 📋 Patient Management
- 🩺 Incident / Appointment Management
- 📅 Calendar View (Mocked)
- 🏠 Home Page with role redirection
- 🔄 LocalStorage-powered persistence (no backend)

---

## 🧪 Demo Credentials

> Login using the following test accounts:

| Role    | Email              | Password     |
|---------|--------------------|--------------|
| Admin   | admin@entnt.in     | admin123     |
| Patient | john@entnt.in      | patient123   |

---

## 🏗️ Project Structure


```

src/
├── assets/
├── components/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   ├── dashboard/
│   │   ├── KPICard.jsx
│   │   ├── NextAppointments.jsx
│   ├── incidents/
│   │   ├── IncidentForm.jsx
│   │   ├── IncidentList.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   ├── patients/
│   │   ├── PatientForm.jsx
│   │   ├── PatientList.jsx
│   ├── ui/
│   │   ├── CalendarView.jsx
│   │   ├── FileUpload.jsx
│   │   ├── ProtectedRoute.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── DataContext.jsx
├── pages/
│   ├── AdminDashboard.jsx
│   ├── CalendarPage.jsx
│   ├── Home.jsx
│   ├── IncidentsPage.jsx
│   ├── Login.jsx
│   ├── PatientsPage.jsx
│   ├── PatientView.jsx
├── utils/
│   ├── auth.js
│   ├── data.js
├── App.jsx
├── main.jsx

````

---

## 🛠️ Technologies Used

- **React 18+**
- **React Router v6**
- **Tailwind CSS**
- `localStorage` for data persistence (no server/database)

---

## ⚙️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/omkarhacker/ENTNT-Technical.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [https://entnt-technical.vercel.app/](https://entnt-technical.vercel.app/)

---

## ⚙️ Technical Decisions

- **No backend**: All data is stored in browser's `localStorage`, initialized on first load.
- **Auth simulation**: Login uses hardcoded user credentials checked against `localStorage`.
- **Routing with protection**: Admin and Patient routes are protected using a `ProtectedRoute` component that checks role.
- **UI framework**: Used Tailwind CSS for rapid UI development and responsive layout.
- **Separation of concerns**: Context API is used for global state management of auth and app data.
