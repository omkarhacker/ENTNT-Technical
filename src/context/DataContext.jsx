import { createContext, useContext, useState, useEffect } from 'react'
import {
  getPatients,
  addPatient,
  updatePatient,
  deletePatient,
  getIncidents,
  addIncident,
  updateIncident,
  deleteIncident,
  getPatientIncidents
} from '../utils/data'

const DataContext = createContext()

export function DataProvider({ children }) {
  const [patients, setPatients] = useState([])
  const [incidents, setIncidents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setPatients(getPatients())
    setIncidents(getIncidents())
    setLoading(false)
  }

  const handleAddPatient = (patient) => {
    addPatient(patient)
    setPatients(getPatients())
  }

  const handleUpdatePatient = (id, updatedPatient) => {
    updatePatient(id, updatedPatient)
    setPatients(getPatients())
  }

  const handleDeletePatient = (id) => {
    deletePatient(id)
    setPatients(getPatients())
    // Also delete related incidents
    const relatedIncidents = incidents.filter(incident => incident.patientId === id)
    relatedIncidents.forEach(incident => deleteIncident(incident.id))
    setIncidents(getIncidents())
  }

  const handleAddIncident = (incident) => {
    addIncident(incident)
    setIncidents(getIncidents())
  }

  const handleUpdateIncident = (id, updatedIncident) => {
    updateIncident(id, updatedIncident)
    setIncidents(getIncidents())
  }

  const handleDeleteIncident = (id) => {
    deleteIncident(id)
    setIncidents(getIncidents())
  }

  const getIncidentsByPatientId = (patientId) => {
    return getPatientIncidents(patientId)
  }

  const value = {
    patients,
    incidents,
    loading,
    addPatient: handleAddPatient,
    updatePatient: handleUpdatePatient,
    deletePatient: handleDeletePatient,
    addIncident: handleAddIncident,
    updateIncident: handleUpdateIncident,
    deleteIncident: handleDeleteIncident,
    getIncidentsByPatientId
  }

  return <DataContext.Provider value={value}>{!loading && children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}