import { useData } from '../context/DataContext'
import PatientList from '../components/patients/PatientList'
import PatientForm from '../components/patients/PatientForm'
import { useState } from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'

function PatientsPage() {
  const { patients, addPatient, updatePatient, deletePatient } = useData()
  const [editingPatient, setEditingPatient] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubmit = (patientData) => {
    if (editingPatient) {
      updatePatient(editingPatient.id, patientData)
    } else {
      addPatient({ ...patientData, id: `p${Date.now()}` })
    }
    setEditingPatient(null)
    setIsFormOpen(false)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Patient Management</h1>
            <button
              onClick={() => {
                setEditingPatient(null)
                setIsFormOpen(true)
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add New Patient
            </button>
          </div>

          <PatientList 
            patients={patients} 
            onEdit={(patient) => {
              setEditingPatient(patient)
              setIsFormOpen(true)
            }}
            onDelete={deletePatient}
          />

          {isFormOpen && (
            <PatientForm
              patient={editingPatient}
              onSubmit={handleSubmit}
              onClose={() => {
                setEditingPatient(null)
                setIsFormOpen(false)
              }}
            />
          )}
        </main>
      </div>
    </div>
  )
}

export default PatientsPage