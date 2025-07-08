import { useData } from '../context/DataContext'
import IncidentList from '../components/incidents/IncidentList'
import IncidentForm from '../components/incidents/IncidentForm'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

function IncidentsPage() {
  const { incidents, patients, addIncident, updateIncident, deleteIncident } = useData()
  const [editingIncident, setEditingIncident] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubmit = (incidentData) => {
    if (editingIncident) {
      updateIncident(editingIncident.id, incidentData)
    } else {
      addIncident({ ...incidentData, id: `i${Date.now()}` })
    }
    setEditingIncident(null)
    setIsFormOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Appointment Management</h1>
            <button
              onClick={() => {
                setEditingIncident(null)
                setIsFormOpen(true)
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add New Appointment
            </button>
          </div>

          <IncidentList 
            incidents={incidents}
            patients={patients}
            onEdit={(incident) => {
              setEditingIncident(incident)
              setIsFormOpen(true)
            }}
            onDelete={deleteIncident}
          />

          {isFormOpen && (
            <IncidentForm
              incident={editingIncident}
              patients={patients}
              onSubmit={handleSubmit}
              onClose={() => {
                setEditingIncident(null)
                setIsFormOpen(false)
              }}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default IncidentsPage