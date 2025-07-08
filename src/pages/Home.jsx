import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Welcome to ENTNT Dental Center
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Comprehensive dental care management system for practitioners and patients
        </p>

        {!user ? (
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 rounded-lg text-lg font-medium transition-colors"
            >
              Patient Portal
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-gray-700">
              You're logged in as <strong>{user.email}</strong>
            </p>
            <button
              onClick={() => navigate(user.role === 'Admin' ? '/admin' : '/patient')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-colors"
            >
              Go to {user.role} Portal
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <FeatureCard
          icon="👨‍⚕️"
          title="For Dentists"
          description="Manage patients, appointments, and treatment records with our comprehensive admin dashboard."
        />
        <FeatureCard
          icon="😁"
          title="For Patients"
          description="View your appointments, treatment history, and upload documents through our patient portal."
        />
        <FeatureCard
          icon="📱"
          title="Mobile Friendly"
          description="Access your dental records anytime, anywhere with our responsive design."
        />
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home
