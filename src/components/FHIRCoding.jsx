import React, { useMemo } from "react"
import { MoveLeft } from "lucide-react"

const FHIRCoding = ({
    step,
    setStep,
    name,
    gender,
    date,
    address,
    observations
}) => {

    const fhirBundle = useMemo(() => {

        const patientId = "patient-1"

        const patientResource = {
            resourceType: "Patient",
            id: patientId,
            name: [
                {
                    use: "official",
                    text: name
                }
            ],
            gender: gender,
            birthDate: date,
            address: [
                {
                    text: address
                }
            ]
        }

        const conditionResources = observations.map((obs, index) => {

            return {
                resourceType: "Condition",
                id: `condition-${index + 1}`,
                subject: {
                    reference: `Patient/${patientId}`
                },
                code: {
                    coding: [
                        {
                            system: "http://id.who.int/icd/release/11/mms",
                            code: obs.ICD11_Code,
                            display: obs.ICD11_Title
                        }
                    ],
                    text: obs.ICD11_Title
                },
                extension: [
                    {
                        url: "traditional-medicine-ayurveda",
                        valueString: `${obs.Ayurveda_NAMC_term} (${obs.Ayurveda_NAMC_CODE})`
                    },
                    {
                        url: "traditional-medicine-siddha",
                        valueString: `${obs.Siddha_NAMC_TERM} (${obs.Siddha_NAMC_CODE})`
                    },
                    {
                        url: "traditional-medicine-unani",
                        valueString: `${obs.Unani_NUMC_TERM} (${obs.Unani_NUMC_CODE})`
                    }
                ]
            }
        })

        return {
            resourceType: "Bundle",
            type: "collection",
            entry: [
                {
                    resource: patientResource
                },
                ...conditionResources.map((c) => ({
                    resource: c
                }))
            ]
        }

    }, [name, gender, date, address, observations])

    return (
        <div className="flex flex-col gap-4">

            {/* Back */}
            <div
                className="text-md flex gap-1 text-stone-700 select-none cursor-pointer items-center"
                onClick={() => setStep(step - 1)}
            >
                <MoveLeft size={15} />
                <span>Back</span>
            </div>

            <div className="text-xl pt-4 select-none">
                Generated FHIR Resource
            </div>

            <div className="bg-stone-900 text-stone-50 border border-stone-300 rounded-md p-4 overflow-auto text-sm font-mono">
                <pre>{JSON.stringify(fhirBundle, null, 2)}</pre>
            </div>

        </div>
    )
}

export default FHIRCoding