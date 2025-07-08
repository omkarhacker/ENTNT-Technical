import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import KPICard from '../components/dashboard/KPICard'
import NextAppointments from '../components/dashboard/NextAppointments'

function AdminDashboard() {
  const { user } = useAuth()
  const { patients, incidents } = useData()

  const stats = {
    totalPatients: patients.length,
    upcomingAppointments: incidents.filter(i => new Date(i.appointmentDate) > new Date()).length,
    completedTreatments: incidents.filter(i => i.status === 'Completed').length,
    totalRevenue: incidents.reduce((sum, i) => sum + (i.cost || 0), 0)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KPICard title="Total Patients" value={stats.totalPatients} icon="👨‍👩‍👧‍👦" />
            <KPICard title="Upcoming Appointments" value={stats.upcomingAppointments} icon="📅" />
            <KPICard title="Completed Treatments" value={stats.completedTreatments} icon="✅" />
            <KPICard title="Total Revenue" value={`$${stats.totalRevenue}`} icon="💰" />
          </div>

          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Next 10 Appointments</h2>
            <NextAppointments incidents={incidents} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard