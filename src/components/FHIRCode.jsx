import React, { useEffect, useState } from 'react'
import { MoveLeft } from 'lucide-react'
import Papa from "papaparse"

const FHIRCode = ({ step, setStep, setObservations }) => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const [selectedObservations, setSelectedObservations] = useState([])

    // Load CSV
    useEffect(() => {

        fetch("/matchedFile/conciseFinalData.csv")
            .then(res => res.text())
            .then(csv => {

                Papa.parse(csv, {
                    header: true,
                    skipEmptyLines: true,

                    complete: (result) => {
                        setData(result.data)
                    }
                })
            })

    }, [])

    // Search logic
    const handleSearch = (value) => {

        setQuery(value)

        if (!value) {
            setResults([])
            return
        }

        const filtered = data.filter((row) => {
            const title = row.ICD11_Title || row["ICD11 Title"]
            return title?.toLowerCase().includes(value.toLowerCase())
        })

        setResults(filtered.slice(0, 5))
    }

    // Select observation
    const handleSelect = (row) => {

        const exists = selectedObservations.find(
            (item) => item.ICD11_Code === row.ICD11_Code
        )

        if (exists) return

        const updated = [...selectedObservations, row]

        setSelectedObservations(updated)
        setObservations(updated)

        setQuery("")
        setResults([])
    }

    // Remove observation
    const handleRemove = (code) => {

        const updated = selectedObservations.filter(
            (item) => item.ICD11_Code !== code
        )

        setSelectedObservations(updated)
        setObservations(updated)
    }

    return (
        <div className='flex flex-col gap-4 h-full'>

            {/* Back */}
            <div
                className='text-md flex gap-1 text-stone-700 select-none cursor-pointer items-center'
                onClick={() => setStep(step - 1)}
            >
                <span className='font-bold'><MoveLeft size={15} /></span>
                <span>Back</span>
            </div>

            {/* Search */}
            <div className="text-xl pt-4 select-none">
                Search Disease (ICD Title)
            </div>

            <div className="relative">

                <input
                    className="bg-stone-100 w-full p-3 rounded-md border border-stone-300 outline-none text-stone-600"
                    placeholder="Search disease..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                />

                {/* Dropdown Results */}
                {results.length > 0 && (
                    <div className="absolute w-full bg-white border border-stone-300 rounded-md shadow-md mt-1 z-10 max-h-80 overflow-y-auto">

                        {results.map((row, index) => {

                            const title = row.ICD11_Title || row["ICD11 Title"]

                            return (
                                <div
                                    key={index}
                                    className="p-4 border-b last:border-none hover:bg-stone-100 cursor-pointer"
                                    onClick={() => handleSelect(row)}
                                >

                                    <div className="font-semibold text-blue-600">
                                        {title}
                                    </div>

                                    <div className="text-sm text-stone-600 pb-2">
                                        ICD Code: {row.ICD11_Code}
                                    </div>

                                    <div className="text-sm">
                                        <span className="font-medium">Ayurveda:</span>{" "}
                                        {row.Ayurveda_NAMC_term} ({row.Ayurveda_NAMC_CODE})
                                        <span className="text-stone-500 ml-2">
                                            Confidence: {row.Ayurveda_Similarity * 100}%
                                        </span>
                                    </div>

                                    <div className="text-sm">
                                        <span className="font-medium">Siddha:</span>{" "}
                                        {row.Siddha_NAMC_TERM} ({row.Siddha_NAMC_CODE})
                                        <span className="text-stone-500 ml-2">
                                            Confidence: {row.Siddha_Similarity * 100}%
                                        </span>
                                    </div>

                                    <div className="text-sm">
                                        <span className="font-medium">Unani:</span>{" "}
                                        {row.Unani_NUMC_TERM} ({row.Unani_NUMC_CODE})
                                        <span className="text-stone-500 ml-2">
                                            Confidence: {row.Unani_Similarity * 100}%
                                        </span>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                )}

            </div>

            {/* Selected Observations */}
            {selectedObservations.length > 0 && (
                <div className="flex flex-col gap-2 pt-2">

                    <div className="text-lg font-medium">
                        Selected Observations
                    </div>

                    {selectedObservations.map((obs) => {

                        const title = obs.ICD11_Title || obs["ICD11 Title"]

                        return (
                            <div
                                key={obs.ICD11_Code}
                                className="flex justify-between items-center border border-stone-300 rounded-md p-3"
                            >

                                <div>
                                    <div className="font-semibold text-blue-600">
                                        {title}
                                    </div>

                                    <div className="text-sm text-stone-600">
                                        ICD Code: {obs.ICD11_Code}
                                    </div>
                                </div>

                                <button
                                    className="text-red-500 text-sm"
                                    onClick={() => handleRemove(obs.ICD11_Code)}
                                >
                                    Remove
                                </button>

                            </div>
                        )
                    })}

                </div>
            )}

            {/* Next Button */}
            <button
                className="w-full bg-blue-600 text-white text-md py-3 rounded-md cursor-pointer hover:bg-blue-500 mt-4"
                onClick={() => setStep(step + 1)}
            >
                Next
            </button>

        </div>
    )
}

export default FHIRCode