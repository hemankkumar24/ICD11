import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [userType, setUserType] = useState(null)
  const [loginMethod, setLoginMethod] = useState(null) // 'credentials', 'hpr', 'abha', 'aadhaar'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hprId: '',
    abhaId: '',
    aadhaarId: '',
    otp: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { userType, loginMethod, ...formData })
    navigate('/dashboard')
  }

  const resetForm = () => {
    setUserType(null)
    setLoginMethod(null)
    setFormData({
      email: '',
      password: '',
      hprId: '',
      abhaId: '',
      aadhaarId: '',
      otp: ''
    })
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
                      <h3 className="text-lg font-semibold text-gray-900">Healthcare Professional</h3>
                      <p className="text-sm text-gray-500">Login with HPR ID</p>
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
                      <p className="text-sm text-gray-500">Login with ABHA ID or Aadhaar</p>
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
          ) : !loginMethod ? (
            // Login Method Selection
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <button
                onClick={resetForm}
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
                    {userType === 'doctor' ? 'Healthcare Professional' : 'Patient Login'}
                  </h1>
                  <p className="text-gray-500 text-sm">Choose your login method</p>
                </div>
              </div>

              <div className="space-y-3">
                {userType === 'doctor' ? (
                  <>
                    {/* HPR ID Login */}
                    <button
                      onClick={() => setLoginMethod('hpr')}
                      className="cursor-pointer w-full p-4 bg-sky-50 rounded-xl border-2 border-transparent hover:border-sky-400 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-gray-900">HPR ID</h3>
                        <p className="text-xs text-gray-500">Healthcare Professionals Registry</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Email/Password Login for Doctor */}
                    <button
                      onClick={() => setLoginMethod('credentials')}
                      className="cursor-pointer w-full p-4 bg-gray-50 rounded-xl border-2 border-transparent hover:border-gray-300 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-gray-900">Email & Password</h3>
                        <p className="text-xs text-gray-500">Use registered credentials</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    {/* ABHA Health ID Login */}
                    <button
                      onClick={() => setLoginMethod('abha')}
                      className="cursor-pointer w-full p-4 bg-emerald-50 rounded-xl border-2 border-transparent hover:border-emerald-400 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-gray-900">ABHA Health ID</h3>
                        <p className="text-xs text-gray-500">Ayushman Bharat Health Account</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Aadhaar Login */}
                    <button
                      onClick={() => setLoginMethod('aadhaar')}
                      className="cursor-pointer w-full p-4 bg-orange-50 rounded-xl border-2 border-transparent hover:border-orange-400 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-gray-900">Aadhaar</h3>
                        <p className="text-xs text-gray-500">Verify with Aadhaar OTP</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : (
            // Login Form based on method
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <button
                onClick={() => setLoginMethod(null)}
                className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-6 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  loginMethod === 'hpr' ? 'bg-sky-100' :
                  loginMethod === 'abha' ? 'bg-emerald-100' :
                  loginMethod === 'aadhaar' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  {loginMethod === 'hpr' && (
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  )}
                  {loginMethod === 'abha' && (
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {loginMethod === 'aadhaar' && (
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  )}
                  {loginMethod === 'credentials' && (
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {loginMethod === 'hpr' && 'HPR ID Login'}
                    {loginMethod === 'abha' && 'ABHA Health ID Login'}
                    {loginMethod === 'aadhaar' && 'Aadhaar Login'}
                    {loginMethod === 'credentials' && 'Email Login'}
                  </h1>
                  <p className="text-gray-500 text-sm">
                    {loginMethod === 'hpr' && 'Enter your HPR ID to continue'}
                    {loginMethod === 'abha' && 'Enter your 14-digit ABHA number'}
                    {loginMethod === 'aadhaar' && 'Enter your 12-digit Aadhaar number'}
                    {loginMethod === 'credentials' && 'Enter your email and password'}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {loginMethod === 'credentials' && (
                  <>
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
                  </>
                )}

                {loginMethod === 'hpr' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HPR ID Number
                    </label>
                    <input
                      type="text"
                      name="hprId"
                      value={formData.hprId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                      placeholder="Enter your HPR ID (e.g., 12-3456-7890-1234)"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Your unique Healthcare Professionals Registry ID
                    </p>
                  </div>
                )}

                {loginMethod === 'abha' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ABHA Number
                    </label>
                    <input
                      type="text"
                      name="abhaId"
                      value={formData.abhaId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                      placeholder="Enter 14-digit ABHA number"
                      maxLength={14}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Your Ayushman Bharat Health Account number
                    </p>
                  </div>
                )}

                {loginMethod === 'aadhaar' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Aadhaar Number
                    </label>
                    <input
                      type="text"
                      name="aadhaarId"
                      value={formData.aadhaarId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      placeholder="Enter 12-digit Aadhaar number"
                      maxLength={12}
                      required
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      OTP will be sent to your Aadhaar-linked mobile
                    </p>
                  </div>
                )}

                {(loginMethod === 'hpr' || loginMethod === 'abha' || loginMethod === 'aadhaar') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-2 focus:ring-gray-100 outline-none transition-all tracking-widest text-center text-lg"
                      placeholder="• • • • • •"
                      maxLength={6}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-500">Enter 6-digit OTP</p>
                      <button type="button" className="text-xs text-sky-600 hover:text-sky-700 font-medium cursor-pointer">
                        Send OTP
                      </button>
                    </div>
                  </div>
                )}

                {loginMethod === 'credentials' && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                      Forgot password?
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  className={`cursor-pointer w-full py-3.5 rounded-xl font-semibold text-white transition-colors ${
                    loginMethod === 'hpr' || loginMethod === 'credentials' ? 'bg-sky-500 hover:bg-sky-600' :
                    loginMethod === 'abha' ? 'bg-emerald-500 hover:bg-emerald-600' :
                    'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {loginMethod === 'credentials' ? 'Sign In' : 'Verify & Continue'}
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                {userType === 'doctor' ? (
                  <>
                    Don't have an HPR ID?{' '}
                    <a href="https://hpr.ndhm.gov.in" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-medium">
                      Register on HPR
                    </a>
                  </>
                ) : (
                  <>
                    Don't have an ABHA ID?{' '}
                    <a href="https://abha.abdm.gov.in" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      Create ABHA
                    </a>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
