function NextAppointments({ incidents }) {
  const upcomingIncidents = incidents
    .filter(incident => new Date(incident.appointmentDate) > new Date())
    .sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate))
    .slice(0, 10)

  return (
    <div className="space-y-4">
      {upcomingIncidents.length === 0 ? (
        <p className="text-gray-500">No upcoming appointments</p>
      ) : (
        upcomingIncidents.map(incident => (
          <div key={incident.id} className="flex items-start p-3 border-b border-gray-100 hover:bg-gray-50">
            <div className="flex-shrink-0 p-2 bg-blue-100 text-blue-600 rounded-lg mr-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {incident.title}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(incident.appointmentDate).toLocaleString()}
              </p>
            </div>
            <div className="ml-4">
              <span className={`px-2 py-1 rounded-full text-xs ${
                incident.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {incident.status}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default NextAppointments