import { useState } from 'react'
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'

function CalendarView({ incidents, onDayClick }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const monthStart = startOfMonth(currentMonth)
  const monthEnd = endOfMonth(currentMonth)
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  const getIncidentsForDay = (day) => {
    return incidents.filter(incident => 
      isSameDay(new Date(incident.appointmentDate), day)
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth}
          className="p-2 rounded hover:bg-gray-100"
        >
          &lt; Previous
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 rounded hover:bg-gray-100"
        >
          Next &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {monthDays.map(day => {
          const dayIncidents = getIncidentsForDay(day)
          const isCurrentMonth = isSameMonth(day, currentMonth)
          
          return (
            <div
              key={day.toString()}
              onClick={() => onDayClick(day)}
              className={`min-h-24 p-1 border rounded cursor-pointer ${
                isCurrentMonth ? 'bg-white' : 'bg-gray-100 text-gray-400'
              } ${
                dayIncidents.length > 0 ? 'border-blue-300' : 'border-gray-200'
              }`}
            >
              <div className="text-right">
                {format(day, 'd')}
              </div>
              {dayIncidents.length > 0 && (
                <div className="mt-1 space-y-1">
                  {dayIncidents.slice(0, 2).map(incident => (
                    <div 
                      key={incident.id}
                      className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
                    >
                      {incident.title}
                    </div>
                  ))}
                  {dayIncidents.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{dayIncidents.length - 2} more
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CalendarView