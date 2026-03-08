import React, { useState } from 'react'
import PatientInformation from '../components/PatientInformation'
import FHIRCode from '../components/FHIRCode'
import FHIRCoding from "../components/FHIRCoding"

const Dashboard = () => {

    const [step, setStep] = useState(1)

    // For Patient Information Component
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")

    // for FHIRCode Component
    const [observations, setObservations] = useState([])

    return (
        <div className="main-font bg-stone-100 w-full min-h-screen flex justify-center">
            <div className="bg-stone-50 w-full max-w-7xl shadow-lg">
                <div className="max-w-5xl mx-auto">

                    {/* Progress Bar */}
                    <div className="flex items-center text-lg border-b-2 border-stone-300 select-none px-6">

                        {/* Step 1 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full text-sm text-white ${step >= 1 ? "bg-blue-600" : "bg-stone-600"}`}>
                                1
                            </span>
                            <span className={`${step >= 1 ? "text-blue-600" : "text-stone-600"}`}>
                                Patient Information
                            </span>
                        </div>

                        <div className="flex-1 h-0.5 bg-stone-300"></div>

                        {/* Step 2 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full text-sm text-white ${step >= 2 ? "bg-blue-600" : "bg-stone-600"}`}>
                                2
                            </span>
                            <span className={`${step >= 2 ? "text-blue-600" : "text-stone-600"}`}>
                                Code Matching
                            </span>
                        </div>

                        <div className="flex-1 h-0.5 bg-stone-300"></div>

                        {/* Step 3 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full text-sm text-white ${step >= 3 ? "bg-blue-600" : "bg-stone-600"}`}>
                                3
                            </span>
                            <span className={`${step >= 3 ? "text-blue-600" : "text-stone-600"}`}>
                                FHIR Coding
                            </span>
                        </div>

                    </div>

                    {/* Step Content */}
                    {step === 1 && (
                        <PatientInformation
                            setName={setName}
                            setAddress={setAddress}
                            setGender={setGender}
                            setDate={setDate}
                            setStep={setStep}
                            name={name}
                            address={address}
                            date={date}
                        />
                    )}

                    {step === 2 && (
                        <div className="p-10 text-xl">
                            <FHIRCode
                                setStep={setStep}
                                step={step}
                                setObservations={setObservations}
                            />
                        </div>
                    )}

                    {step === 3 && (
                        <div className="p-10 text-xl">
                            <FHIRCoding
                                step={step}
                                setStep={setStep}
                                name={name}
                                gender={gender}
                                date={date}
                                address={address}
                                observations={observations}
                            />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Dashboard