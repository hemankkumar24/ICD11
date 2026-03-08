import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { userType, ...formData })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#f0f5ff] flex flex-col">
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 pt-8">
        <div 
          className="flex items-center gap-2 cursor-pointer w-fit"
          onClick={() => navigate('/')}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">Med Link</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {!userType ? (
            // User Type Selection
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Welcome Back</h1>
              <p className="text-gray-500 text-center mb-8">Choose your account type to continue</p>
              
              <div className="space-y-4">
                {/* Doctor Login */}
                <button
                  onClick={() => setUserType('doctor')}
                  className="cursor-pointer w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-sky-400 hover:bg-sky-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                      <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">Doctor</h3>
                      <p className="text-sm text-gray-500">Access patient records & diagnoses</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>

                {/* Patient Login */}
                <button
                  onClick={() => setUserType('patient')}
                  className="cursor-pointer w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-900">Patient</h3>
                      <p className="text-sm text-gray-500">View your health records</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8">
                Don't have an account?{' '}
                <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">Sign up</a>
              </p>
            </div>
          ) : (
            // Login Form
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <button
                onClick={() => setUserType(null)}
                className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  userType === 'doctor' ? 'bg-sky-100' : 'bg-emerald-100'
                }`}>
                  {userType === 'doctor' ? (
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {userType === 'doctor' ? 'Doctor Login' : 'Patient Login'}
                  </h1>
                  <p className="text-gray-500 text-sm">Enter your credentials to continue</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className={`cursor-pointer w-full py-3.5 rounded-xl font-semibold text-white transition-colors ${
                    userType === 'doctor' 
                      ? 'bg-sky-500 hover:bg-sky-600' 
                      : 'bg-emerald-500 hover:bg-emerald-600'
                  }`}
                >
                  Sign In
                </button>

                {userType === 'doctor' && (
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">or continue with</span>
                    </div>
                  </div>
                )}

                {userType === 'doctor' && (
                  <button
                    type="button"
                    className="cursor-pointer w-full py-3 rounded-xl border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    Sign in with ABHA ID
                  </button>
                )}
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                Don't have an account?{' '}
                <a href="#" className="text-sky-600 hover:text-sky-700 font-medium">Sign up</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
