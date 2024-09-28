import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/auth'

const AuthWrapper = ({ children }) => {
  const { token } = useAuth()

  if (!token) {
    return <Navigate to="/login" />
  }

  return children
}

export default AuthWrapper
