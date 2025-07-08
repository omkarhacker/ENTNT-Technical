function KPICard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center">
        <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default KPICard