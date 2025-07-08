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
├── components/         # UI components (Sidebar, LoginForm, etc.)
│   └── ui/
├── context/            # React Contexts (Auth, Data)
├── pages/              # Page-level components (Dashboard, PatientsPage, etc.)
├── utils/              # Utility logic (auth.js, data.js)
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles

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
   git clone https://github.com/your-username/entnt-dental-frontend.git
   cd entnt-dental-frontend
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Visit [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Technical Decisions

* **No backend**: All data is stored in browser's `localStorage`, initialized on first load.
* **Auth simulation**: Login uses hardcoded user credentials checked against `localStorage`.
* **Routing with protection**: Admin and Patient routes are protected using a `ProtectedRoute` component that checks role.
* **UI framework**: Used Tailwind CSS for rapid UI development and responsive layout.
* **Separation of concerns**: Context API is used for global state management of auth and app data.

---

## 🐞 Known Issues / Limitations

* ❌ No registration or password reset functionality
* ❌ No real backend or API integration
* ❌ All data is reset when clearing browser storage
* 🧪 Minimal validation (e.g. email format is not enforced)
* 📅 Calendar page is static and not functional

---

## 🧼 Recommendations for Future Improvement

* ✅ Replace `localStorage` with real backend (Node.js + MongoDB)
* ✅ Implement secure authentication (JWT, sessions)
* ✅ Add registration and password reset
* ✅ Integrate calendar with actual appointment logic
* ✅ Add validations, better UX, and file upload preview

---

## 👤 Author

* **Omkar Gadam**
* Final Year B.Tech CSE | MERN Stack Developer

---

## 📬 Contact

For queries or feedback: \[[your-email@example.com](mailto:your-email@example.com)]

```

---

Let me know if you want this README exported as a `.md` file, or if you want it tailored for deployment (like if you're hosting it on Vercel or Netlify).
```
