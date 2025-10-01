import { useState, useEffect } from "react";

const Clock = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            console.log('tick');
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Clock</h1>
            <p>{time}</p>
        </div>
    );
}

export default Clock;