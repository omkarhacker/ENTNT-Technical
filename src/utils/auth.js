const USERS_KEY = 'dental_users'
const CURRENT_USER_KEY = 'current_user'

export const initAuthData = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    const defaultUsers = [
      {
        id: "1",
        role: "Admin",
        email: "admin@entnt.in",
        password: "admin123"
      },
      {
        id: "2",
        role: "Patient",
        email: "john@entnt.in",
        password: "patient123",
        patientId: "p1"
      }
    ]
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers))
  }
}

export const loginUser = (email, password) => {
  initAuthData()
  const users = JSON.parse(localStorage.getItem(USERS_KEY))
  const user = users.find(u => u.email === email && u.password === password)
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))
    return user
  }
  return null
}

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY)
  return user ? JSON.parse(user) : null
}