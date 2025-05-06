"use client"

import { useContext } from 'react'
import { AuthContext } from '../../_context/AuthContext'
import LoginForm from './Login'
import RegisterForm from './Register'

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, authType } = useContext(AuthContext)

  if (!showAuthModal) return null

  return (
    <div className="fixed inset-0 bg-black/45 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {authType === 'login' ? 'ورود به سیستم' : 'ثبت‌نام'}
          </h2>
          <button 
            onClick={() => setShowAuthModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        {authType === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  )
}