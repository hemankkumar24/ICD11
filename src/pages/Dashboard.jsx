import React, { useState } from 'react'

const Dashboard = () => {

    // manage steps

    // patient information
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [gender, setGender] = useState("")
    const [date, setDate] = useState("")

    const printDetails = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(address);
        console.log(gender);
        console.log(date);
    }

    return (
        <div className="main-font bg-stone-100 w-full min-h-screen flex justify-center">
            <div className="bg-stone-50 w-full max-w-7xl shadow-lg">
                <div className="max-w-5xl mx-auto">
                    {/* Progress Bar */}
                    <div className="flex items-center text-lg border-b-2 border-stone-300 select-none px-6">
                        
                        {/* Step 1 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm">
                                1
                            </span>
                            <span className="text-blue-600">Patient Information</span>
                        </div>

                        <div className="flex-1 h-0.5 bg-stone-300"></div>

                        {/* Step 2 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className="w-6 h-6 flex items-center justify-center bg-stone-600 text-white rounded-full text-sm">
                                2
                            </span>
                            <span className="text-stone-600">Code Matching</span>
                        </div>

                        <div className="flex-1 h-0.5 bg-stone-300"></div>

                        {/* Step 3 */}
                        <div className="flex items-center gap-2 p-5">
                            <span className="w-6 h-6 flex items-center justify-center bg-stone-600 text-white rounded-full text-sm">
                                3
                            </span>
                            <span className="text-stone-600">FHIR Coding</span>
                        </div>

                    </div>

                    {/* Form */}
                    <div className="flex flex-col p-10">

                        {/* Name */}
                        <div className="text-xl select-none pb-2">
                            Enter Name
                        </div>
                        <input
                            className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                            placeholder="John Doe"
                            onChange={(e) => {setName(e.target.value)}}
                        />

                        {/* Address */}
                        <div className="text-xl select-none pt-4 pb-2">
                            Enter Address
                        </div>
                        <input
                            className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                            placeholder="Address"
                            onChange={(e) => {setAddress(e.target.value)}}
                        />

                        {/* Gender + DOB */}
                        <div className="grid grid-cols-2 gap-5 pt-4 pb-4">

                            {/* Gender */}
                            <div>
                                <div className="text-xl select-none pb-2">
                                    Enter Gender
                                </div>
                                <select className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"   
                                onChange={(e) => {setGender(e.target.value)}}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                    <option value="prefer_not">Prefer not to say</option>
                                </select>
                            </div>

                            {/* DOB */}
                            <div>
                                <div className="text-xl select-none pb-2">
                                    Enter Date of Birth
                                </div>
                                <input
                                    type="date"
                                    className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                                    onChange={(e) => {setDate(e.target.value)}}
                                />
                            </div>

                        </div>

                        {/* Next Button */}
                        <button className="w-full bg-blue-600 text-white text-md py-3 rounded-md cursor-pointer hover:bg-blue-500" onClick={printDetails}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard