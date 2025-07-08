import { useState } from 'react'
import { useData } from '../context/DataContext'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import CalendarView from '../components/ui/CalendarView'
import IncidentList from '../components/incidents/IncidentList'

function CalendarPage() {
  const { incidents, patients } = useData()
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDayClick = (day) => {
    setSelectedDate(day)
  }

  const filteredIncidents = selectedDate
    ? incidents.filter(incident => 
        new Date(incident.appointmentDate).toDateString() === selectedDate.toDateString()
      )
    : []

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Appointment Calendar</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CalendarView 
                incidents={incidents} 
                onDayClick={handleDayClick} 
              />
            </div>
            <div>
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-semibold mb-4">
                  {selectedDate 
                    ? `Appointments on ${selectedDate.toLocaleDateString()}`
                    : 'Select a date to view appointments'}
                </h2>
                {selectedDate && (
                  <IncidentList 
                    incidents={filteredIncidents} 
                    patients={patients} 
                    onEdit={() => {}} 
                    onDelete={() => {}} 
                    hideActions
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CalendarPage