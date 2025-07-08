
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { DataProvider } from './context/DataContext'
import Home from './pages/Home'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import PatientsPage from './pages/PatientsPage'
import IncidentsPage from './pages/IncidentsPage'
import CalendarPage from './pages/CalendarPage'
import PatientView from './pages/PatientView'
import ProtectedRoute from './components/ui/ProtectedRoute'

function App() {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute role="Admin" />}>
              <Route index element={<AdminDashboard />} />
              <Route path="patients" element={<PatientsPage />} />
              <Route path="incidents" element={<IncidentsPage />} />
              <Route path="calendar" element={<CalendarPage />} />
            </Route>
            <Route path="/patient" element={<ProtectedRoute role="Patient" />}>
              <Route index element={<PatientView />} />
            </Route>
          </Routes>
        </DataProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
