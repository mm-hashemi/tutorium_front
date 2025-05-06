"use client"

import { useContext, useState } from 'react'
import { AuthContext } from '../../_context/AuthContext'

export default function LoginForm() {
  const { login, setAuthType } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // در اینجا باید درخواست به سرور ارسال شود
    login({
      email: formData.email,
      role: 'student' // این مقدار باید از سرور دریافت شود
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        ورود
      </button>
      <div className="mt-4 text-center">
        <button 
          type="button"
          className="text-blue-600 hover:underline"
          onClick={() => setAuthType('register')}
        >
          حساب کاربری ندارید؟ ثبت‌نام کنید
        </button>
      </div>
    </form>
  )
}