import { useState } from "react"
import icon from '../img/icon-arrow.svg'


export const DateForm = ({ onCalculateAge }) => {
    const [dataForm, setDataForm] = useState({
        day: '',
        month: '',
        year: ''
    })

    const [errors, setErrors] = useState({
        day: '',
        month: '',
        year: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setDataForm(fields => (
            { ...fields, [name]: value }
        ))
    }

    const validate = () => {
        const newErrors = {}

        if (dataForm.day === '')
            newErrors.day = 'This field is required'
        else if (Number(dataForm.day) > 31 || Number(dataForm.day) < 1)
            newErrors.day = 'Must be a valid day'
        else if (dataForm.day > new Date(dataForm.year, dataForm.month, 0).getDate())
            newErrors.day = 'Must be a valid date'
        else
            newErrors.day = ''

        if (dataForm.month === '')
            newErrors.month = "This field is required"
        else if (Number(dataForm.month) > 12 || Number(dataForm.month) < 1)
            newErrors.month = "Must be a valid month"
        else
            newErrors.month = ''

        if (dataForm.year === '')
            newErrors.year = 'This field is required'
        else if (Number(dataForm.year) > new Date().getFullYear())
            newErrors.year = 'Must be in the past'
        else
            newErrors.year = ''

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationResult = validate()

        setErrors(validationResult)

        if (validationResult.day === '' && validationResult.month === '' && validationResult.year === '')
            onCalculateAge({ day: dataForm.day, month: dataForm.month, year: dataForm.year })
    }

    return (
        <form className="date-form">

            <div className="input-group">
                <label className="label-date">DAY</label>
                {
                    errors.day && <span className="error-message"> {errors.day}</span>
                }
                <input
                    type="text"
                    name="day"
                    placeholder="DD"
                    value={dataForm.day}
                    onChange={handleChange} />
                
            </div>

            <div className="input-group">
                <label className="label-date">MONTH</label>
                {
                    errors.month && <span className="error-message"> {errors.month}</span>
                }
                <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    value={dataForm.month}
                    onChange={handleChange} />
                
            </div>

            <div className="input-group">
                <label className="label-date">YEAR</label>
                {
                    errors.year && <span className="error-message"> {errors.year}</span>
                }
                <input
                    type="text"
                    name="year"
                    placeholder="YYYY"
                    value={dataForm.year}
                    onChange={handleChange} />
                
            </div>
            
            <button className="button-submit" onClick={handleSubmit}>
                <img src={icon} alt="" className="icon-submit" />
            </button>
        </form>
    )
}