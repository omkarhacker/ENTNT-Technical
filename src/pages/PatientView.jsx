import { useAuth } from "../context/AuthContext";
import { useData } from "../context/DataContext";
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

function PatientView() {
  const { user } = useAuth()
  const { patients, getIncidentsByPatientId } = useData()
  
  const patient = patients.find(p => p.id === user.patientId)
  const incidents = getIncidentsByPatientId(user.patientId)

  if (!patient) {
    return <div>Patient not found</div>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={user} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h1 className="text-2xl font-semibold mb-4">My Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">Full Name</p>
                <p className="font-medium">{patient.name}</p>
              </div>
              <div>
                <p className="text-gray-600">Date of Birth</p>
                <p className="font-medium">{patient.dob}</p>
              </div>
              <div>
                <p className="text-gray-600">Contact</p>
                <p className="font-medium">{patient.contact}</p>
              </div>
              <div>
                <p className="text-gray-600">Health Information</p>
                <p className="font-medium">{patient.healthInfo}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">My Appointments</h2>
            {incidents.length === 0 ? (
              <p>No appointments found</p>
            ) : (
              <div className="space-y-4">
                {incidents.map(incident => (
                  <div key={incident.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{incident.title}</h3>
                        <p className="text-gray-600 text-sm">{new Date(incident.appointmentDate).toLocaleString()}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        incident.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="mt-2">{incident.description}</p>
                    {incident.comments && <p className="mt-1 text-sm text-gray-600">Comments: {incident.comments}</p>}
                    {incident.cost && <p className="mt-1 font-medium">Cost: ${incident.cost}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default PatientView