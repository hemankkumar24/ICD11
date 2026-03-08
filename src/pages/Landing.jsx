import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: 'NAMASTE CodeSystem',
      description: '4,500+ standardized terms for Ayurveda, Siddha, and Unani disorders',
      icon: '📋'
    },
    {
      title: 'ICD-11 TM2 Integration',
      description: '529 disorder categories and 196 pattern codes from WHO Traditional Medicine Module 2',
      icon: '🌐'
    },
    {
      title: 'FHIR R4 Compliant',
      description: "Full compliance with India's 2016 EHR Standards and FHIR R4 APIs",
      icon: '✅'
    },
    {
      title: 'Auto-complete Lookup',
      description: 'REST endpoint for real-time value-set lookup and terminology search',
      icon: '🔍'
    },
    {
      title: 'Dual-Coding Support',
      description: 'Map NAMASTE codes to ICD-11 TM2 and Biomedicine for interoperability',
      icon: '🔄'
    },
    {
      title: 'OAuth 2.0 & ABHA',
      description: 'Secure access with ABHA tokens and audit-ready metadata',
      icon: '🔐'
    }
  ]

  const apiEndpoints = [
    { method: 'GET', endpoint: '/api/namaste/search', description: 'Auto-complete value-set lookup' },
    { method: 'GET', endpoint: '/api/icd11/tm2/search', description: 'Search TM2 disorder codes' },
    { method: 'POST', endpoint: '/api/translate/namaste-to-tm2', description: 'NAMASTE → TM2 translation' },
    { method: 'POST', endpoint: '/api/fhir/bundle', description: 'Upload FHIR Bundle with dual codes' },
    { method: 'GET', endpoint: '/api/fhir/CodeSystem/namaste', description: 'FHIR CodeSystem resource' },
    { method: 'GET', endpoint: '/api/fhir/ConceptMap/namaste-tm2', description: 'FHIR ConceptMap resource' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pb-20">
        <nav className="flex justify-between items-center px-6 md:px-10 py-5">
          <div className="flex items-center gap-3 text-xl md:text-2xl font-bold">
            <span className="text-3xl">🏥</span>
            <span>NAMASTE-ICD11 API</span>
          </div>
          <button 
            className="bg-white/15 border border-white/30 px-5 py-2.5 rounded-lg hover:bg-white/25 transition-all duration-300"
            onClick={() => navigate('/dashboard')}
          >
            Dashboard →
          </button>
        </nav>
        
        <div className="text-center px-5 py-16 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            NAMASTE & ICD-11 TM2 Integration API
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            A lightweight FHIR R4–compliant terminology micro-service bridging India's AYUSH 
            terminologies with WHO's International Classification of Diseases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => navigate('/dashboard')}
            >
              Try the API
            </button>
            <a 
              href="#features" 
              className="border-2 border-white px-8 py-3 rounded-lg text-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          <div className="flex gap-3 justify-center flex-wrap">
            {['FHIR R4', 'EHR 2016 Standards', 'WHO ICD-11', 'ABHA Compatible'].map((badge) => (
              <span key={badge} className="bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-5 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Bridging Traditional & Modern Medicine
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
            India's Ayush sector is rapidly transitioning from paper-based records to interoperable 
            digital health systems. This API harmonizes <strong className="text-blue-800">NAMASTE</strong> (National AYUSH 
            Morbidity & Standardized Terminologies Electronic) codes with <strong className="text-blue-800">WHO's ICD-11 
            Traditional Medicine Module 2</strong>, enabling accurate clinical documentation, 
            decision support, and compliance with India's 2016 EHR Standards.
          </p>
          <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-600">4,500+</span>
              <span className="text-gray-500 mt-2">NAMASTE Terms</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-600">529</span>
              <span className="text-gray-500 mt-2">TM2 Disorder Codes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-blue-600">196</span>
              <span className="text-gray-500 mt-2">Pattern Codes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-4xl block mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section className="py-20 px-5 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            API Endpoints
          </h2>
          <div className="max-w-4xl mx-auto bg-white/5 rounded-xl overflow-hidden">
            <div className="hidden md:grid grid-cols-[80px_1fr_1fr] gap-5 px-6 py-4 bg-white/10 font-bold text-sm uppercase tracking-wide">
              <span>Method</span>
              <span>Endpoint</span>
              <span>Description</span>
            </div>
            {apiEndpoints.map((api, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-2 md:gap-5 px-6 py-4 border-t border-white/10 hover:bg-white/5 transition-colors"
              >
                <span className={`font-bold text-xs px-2 py-1 rounded text-center w-fit ${
                  api.method === 'GET' ? 'bg-green-500' : 'bg-orange-500'
                }`}>
                  {api.method}
                </span>
                <code className="font-mono text-blue-200">{api.endpoint}</code>
                <span className="text-gray-300">{api.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance Section */}
      <section className="py-20 px-5 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
            Standards Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-5">🏛️ India EHR 2016</h3>
              <ul className="space-y-3">
                {['FHIR R4 APIs', 'SNOMED CT & LOINC semantics', 'ISO 22600 access control', 'Audit trails for consent'].map((item) => (
                  <li key={item} className="text-gray-600 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-5">🌍 WHO ICD-11</h3>
              <ul className="space-y-3">
                {['Traditional Medicine Module 2', 'Biomedicine integration', 'Global coding rules compliance', 'Real-time API synchronization'].map((item) => (
                  <li key={item} className="text-gray-600 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-blue-900 mb-5">🔒 Security</h3>
              <ul className="space-y-3">
                {['OAuth 2.0 authentication', 'ABHA-linked tokens', 'Version tracking', 'Consent metadata'].map((item) => (
                  <li key={item} className="text-gray-600 border-b border-gray-100 pb-3 flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-5 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-lg opacity-90 mb-8">
            Start using the NAMASTE-ICD11 API to enable dual-coding in your EMR system
          </p>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
            onClick={() => navigate('/dashboard')}
          >
            Explore Dashboard
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-5 text-center">
        <p>NAMASTE-ICD11 API Integration | FHIR R4 Compliant | India EHR Standards 2016</p>
        <p className="mt-2 text-sm opacity-70">
          Supporting Ayurveda, Siddha, Unani & WHO Traditional Medicine Module 2
        </p>
      </footer>
    </div>
  )
}

export default Landing