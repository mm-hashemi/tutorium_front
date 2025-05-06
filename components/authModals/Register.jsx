"use client"

import { useContext, useState } from 'react'
import { AuthContext } from '../../_context/AuthContext'

export default function RegisterForm() {
  const { login, setAuthType, role, setRole } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // در اینجا باید درخواست به سرور ارسال شود
    login({
      email: formData.email,
      name: formData.name,
      role: role
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">نام کامل</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">ایمیل</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">رمز عبور</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">تکرار رمز عبور</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">نقش</label>
        <div className="flex gap-4">
          {['student', 'teacher'].map((r) => (
            <label key={r} className="flex items-center">
              <input
                type="radio"
                name="role"
                checked={role === r}
                onChange={() => setRole(r)}
                className="ml-2"
              />
              {r === 'student' && 'دانشجو'}
              {r === 'teacher' && 'استاد'}
              
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        ثبت‌نام
      </button>
      <div className="mt-4 text-center">
        <button 
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setAuthType('login')}
        >
          قبلاً ثبت‌نام کرده‌اید؟ وارد شوید
        </button>
      </div>
    </form>
  )
}