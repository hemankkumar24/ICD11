import React, { useState } from 'react'
import PatientInformation from '../components/PatientInformation'

const Dashboard = () => {

    // manage steps
    const [step, setStep] = useState(1)
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
        <>
            <PatientInformation setName={setName} setAddress={setAddress} setDate={setDate} setGender={setGender} printDetails={printDetails} />
        </>
    )
}

export default Dashboard