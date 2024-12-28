import { useState } from "react"
import { DateForm } from "./DateForm"
import { Display } from "./Display"

export const AgeCalculator = () => {
    const [age, setAge] = useState({ days: 0, months: 0, years: 0 })

    const handleCalculateAge = (date) => {
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1
        const currentDay = currentDate.getDate()

        const agedYears = currentYear - date.year
        const agedMonth = currentMonth - date.month
        const agedDays = currentDay - date.day

        setAge({ days: agedDays, months: agedMonth, years: agedYears })
    }

    return (
        <div className="age-calculator">
            <DateForm onCalculateAge={handleCalculateAge} />
            <Display age={age} />
        </div>
    )
}
