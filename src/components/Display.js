import  OutputDate  from "./OutputDate"

export const Display = ({ age  }) => {
    return (
        <div className="display">
            <OutputDate value={age.years} name ="year"/>
            <OutputDate value={age.months} name="month"/>
            <OutputDate value={age.days} name="day"/>
        </div>
    )
}