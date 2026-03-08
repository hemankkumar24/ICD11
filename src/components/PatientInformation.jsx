import React from 'react'

const PatientInformation = ({ setName, setAddress, setGender, setDate, setStep, name, address, date }) => {
    return (
        <div className='w-full'>
            <div className="flex flex-col p-10">

                {/* Name */}
                <div className="text-xl select-none pb-2">
                    Enter Name
                </div>
                <input
                    className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                {/* Address */}
                <div className="text-xl select-none pt-4 pb-2">
                    Enter Address
                </div>
                <input
                    className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                {/* Gender + DOB */}
                <div className="grid grid-cols-2 gap-5 pt-4 pb-4">

                    {/* Gender */}
                    <div>
                        <div className="text-xl select-none pb-2">
                            Enter Gender
                        </div>
                        <select
                            className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                            onChange={(e) => setGender(e.target.value)}
                        >
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
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </div>

                </div>

                {/* Next Button */}
                <button
                    className="w-full bg-blue-600 text-white text-md py-3 rounded-md cursor-pointer hover:bg-blue-500"
                    onClick={() => setStep(2)}
                >
                    Next
                </button>

            </div>
        </div>
    )
}

export default PatientInformation