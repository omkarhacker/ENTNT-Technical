const PATIENTS_KEY = 'dental_patients'
const INCIDENTS_KEY = 'dental_incidents'

export const initData = () => {
  if (!localStorage.getItem(PATIENTS_KEY)) {
    const defaultPatients = [
      {
        id: "p1",
        name: "John Doe",
        dob: "1990-05-10",
        contact: "1234567890",
        healthInfo: "No allergies"
      }
    ]
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(defaultPatients))
  }

  if (!localStorage.getItem(INCIDENTS_KEY)) {
    const defaultIncidents = [
      {
        id: "11",
        patientId: "p1",
        title: "Toothache",
        description: "Upper molar pain",
        comments: "Sensitive to cold",
        appointmentDate: "2025-07-01T10:00:00",
        cost: 80,
        status: "Completed",
        files: [
          { name: "invoice.pdf", url: "base64string-or-blob-url" },
          { name: "xray.png", url: "base64string-or-blob-url" }
        ]
      }
    ]
    localStorage.setItem(INCIDENTS_KEY, JSON.stringify(defaultIncidents))
  }
}

export const getPatients = () => {
  initData()
  return JSON.parse(localStorage.getItem(PATIENTS_KEY))
}

export const addPatient = (patient) => {
  const patients = getPatients()
  patients.push(patient)
  localStorage.setItem(PATIENTS_KEY, JSON.stringify(patients))
}

export const updatePatient = (id, updatedPatient) => {
  const patients = getPatients()
  const index = patients.findIndex(p => p.id === id)
  if (index !== -1) {
    patients[index] = { ...patients[index], ...updatedPatient }
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(patients))
  }
}

export const deletePatient = (id) => {
  const patients = getPatients()
  const updatedPatients = patients.filter(p => p.id !== id)
  localStorage.setItem(PATIENTS_KEY, JSON.stringify(updatedPatients))
}

export const getIncidents = () => {
  initData()
  return JSON.parse(localStorage.getItem(INCIDENTS_KEY))
}

export const getPatientIncidents = (patientId) => {
  const incidents = getIncidents()
  return incidents.filter(i => i.patientId === patientId)
}

export const addIncident = (incident) => {
  const incidents = getIncidents()
  incidents.push(incident)
  localStorage.setItem(INCIDENTS_KEY, JSON.stringify(incidents))
}

export const updateIncident = (id, updatedIncident) => {
  const incidents = getIncidents()
  const index = incidents.findIndex(i => i.id === id)
  if (index !== -1) {
    incidents[index] = { ...incidents[index], ...updatedIncident }
    localStorage.setItem(INCIDENTS_KEY, JSON.stringify(incidents))
  }
}

export const deleteIncident = (id) => {
  const incidents = getIncidents()
  const updatedIncidents = incidents.filter(i => i.id !== id)
  localStorage.setItem(INCIDENTS_KEY, JSON.stringify(updatedIncidents))
}