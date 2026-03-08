import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'NAMASTE CodeSystem',
      description: '30,000+ standardized terms for Ayurveda, Siddha, and Unani disorders',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'ICD-11 TM2 Integration',
      description: '529 disorder categories and 196 pattern codes from WHO Traditional Medicine Module 2',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'FHIR R4 Compliant',
      description: "Full compliance with India's 2016 EHR Standards and FHIR R4 APIs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Auto-complete Lookup',
      description: 'REST endpoint for real-time value-set lookup and terminology search',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Dual-Coding Support',
      description: 'Map NAMASTE codes to ICD-11 TM2 and Biomedicine for interoperability',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'OAuth 2.0 & ABHA',
      description: 'Secure access with ABHA tokens and audit-ready metadata',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-[#f0f5ff]">
      {/* Hero Section */}
      <section className="px-8 md:px-16 lg:px-24 pt-12 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-200">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Med Link</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="cursor-pointer bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Login
          </button>
        </div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Headline */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Unified terminology
              <br />
              API for healthcare
            </h1>
          </div>

          {/* Right Side - Description & CTAs */}
          <div className="lg:pt-4">
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              FHIR R4–compliant micro-service bridging India's AYUSH terminologies with WHO's ICD-11 Traditional Medicine Module 2.
            </p>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => navigate('/dashboard')}
                className="cursor-pointer bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Get started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="cursor-pointer bg-white text-gray-900 px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="px-8 md:px-16 lg:px-24 pb-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-200 h-[400px] md:h-[500px]">
          {/* Decorative Elements */}
          <div className="absolute inset-0">
            {/* Floating circles/spheres */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-300/50 rounded-full blur-sm"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-blue-400/40 rounded-full blur-sm"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/50 rounded-full blur-sm"></div>
            <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-white/50 rounded-full blur-sm"></div>
            <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-blue-300/60 rounded-full blur-sm"></div>
            
            {/* Central capsule-like shape */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-b from-cyan-300/70 to-blue-400/70 rounded-full blur-[2px]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-56 bg-gradient-to-b from-white/40 to-cyan-300/50 rounded-full"></div>
            
            {/* Small dots pattern */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-cyan-500/80 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="absolute bottom-8 right-8 space-y-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl shadow-cyan-200/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">30,000<span className="text-xl">+</span></div>
                  <div className="text-sm text-gray-500">NAMASTE terminology codes</div>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl shadow-cyan-200/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">529<span className="text-xl">+</span></div>
                  <div className="text-sm text-gray-500">ICD-11 TM2 disorder codes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-medium text-sm uppercase tracking-wider">About the Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Bridging Traditional & Modern Medicine
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              India's Ayush sector is rapidly transitioning from paper-based records to interoperable 
              digital health systems. Med Link harmonizes <span className="text-cyan-500 font-semibold">NAMASTE</span> codes 
              with <span className="text-cyan-500 font-semibold">WHO's ICD-11 Traditional Medicine Module 2</span>, enabling 
              accurate clinical documentation and compliance with EHR Standards.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">30,000+</div>
              <div className="text-gray-600">NAMASTE Terms</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">529</div>
              <div className="text-gray-600">TM2 Disorder Codes</div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">196</div>
              <div className="text-gray-600">Pattern Codes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 md:px-16 lg:px-24 bg-[#f0f5ff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-medium text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Key Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-medium text-sm uppercase tracking-wider">Compliance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Standards & Security
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">India EHR 2016</h3>
              <ul className="space-y-3">
                {['FHIR R4 APIs', 'SNOMED CT & LOINC', 'ISO 22600 Access Control', 'Audit Trails'].map((item) => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">WHO ICD-11</h3>
              <ul className="space-y-3">
                {['TM Module 2', 'Biomedicine Integration', 'Global Coding Rules', 'Real-time Sync'].map((item) => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-100">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white mb-5 shadow-lg shadow-cyan-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Security</h3>
              <ul className="space-y-3">
                {['OAuth 2.0', 'ABHA Tokens', 'Version Tracking', 'Consent Metadata'].map((item) => (
                  <li key={item} className="text-gray-600 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-sky-100 mb-10">
            Start using the Med Link API to enable dual-coding in your EMR system
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="cursor-pointer bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Explore Dashboard
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 bg-gray-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">Med Link</span>
        </div>
        <p className="text-gray-400 mb-2">FHIR R4 Compliant | India EHR Standards 2016</p>
        <p className="text-gray-500 text-sm">
          Supporting Ayurveda, Siddha, Unani & WHO Traditional Medicine Module 2
        </p>
      </footer>
    </div>
  )
}

export default Landing