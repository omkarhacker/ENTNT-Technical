import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Sidebar() {
  const { user } = useAuth()

  const adminLinks = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/patients', label: 'Patients', icon: '👨‍⚕️' },
    { path: '/admin/incidents', label: 'Appointments', icon: '📅' },
    { path: '/admin/calendar', label: 'Calendar', icon: '🗓️' }
  ]

  const patientLinks = [
    { path: '/patient', label: 'My Dashboard', icon: '🏠' }
  ]

  // 🛑 if no user (e.g., on home page), only show Home link
  const links = user
    ? user.role === 'Admin'
      ? adminLinks
      : patientLinks
    : []

  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <nav className="mt-6">
          <ul className="space-y-2">
            {/* Home Link - always available */}
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-600'}`
                }
              >
                <span className="mr-3">🏡</span>
                Home
              </NavLink>
            </li>

            {/* Role-based links only if user exists */}
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg ${isActive ? 'bg-blue-700' : 'hover:bg-blue-600'}`
                  }
                >
                  <span className="mr-3">{link.icon}</span>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
