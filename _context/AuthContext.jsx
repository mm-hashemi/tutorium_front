"use client"

import { createContext, useState } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authType, setAuthType] = useState('login') // 'login' or 'register'
  const [role, setRole] = useState('student') // 'student', 'teacher', 'admin'

  const login = (userData) => {
    setUser(userData)
    setShowAuthModal(false)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      showAuthModal,
      setShowAuthModal,
      authType,
      setAuthType,
      role,
      setRole
    }}>
      {children}
    </AuthContext.Provider>
  )
}