import { useAuth } from '../../context/AuthContext'

function Header() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800">ENTNT Dental Center</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Welcome, {user?.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header