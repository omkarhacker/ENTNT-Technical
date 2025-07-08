import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function ProtectedRoute({ role }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  if (role && user.role !== role) {
    return <Navigate to={user.role === 'Admin' ? '/admin' : '/patient'} replace />
  }

  return <Outlet />  // ✅ this enables nested routes to render
}

export default ProtectedRoute
