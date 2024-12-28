import { useEffect, useState } from "react"

const OutputDate = ({ value, name }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(0);

        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < value) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, [value]);

    return (
        <div>
            <span className="date"> {count || '--'} </span> {value === 1 ? name : name + "s"}
        </div>
    )
}

export default OutputDate