import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import LoginForm from '../components/auth/LoginForm'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleLogin = async (email, password) => {
    const success = await login(email, password)
    if (!success) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Dental Center Login</h1>

        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}

        <LoginForm onLogin={handleLogin} />

        {/* Demo Credentials */}
        <div className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold text-blue-700 mb-2">Demo Credentials</p>
          <ul className="space-y-1">
            <li><strong>Admin</strong> → Email: <code>admin@entnt.in</code>, Password: <code>admin123</code></li>
            <li><strong>Patient</strong> → Email: <code>john@entnt.in</code>, Password: <code>patient123</code></li>
          </ul>
        </div>

        {/* Go to Home button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline text-sm"
          >
            ← Go to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
