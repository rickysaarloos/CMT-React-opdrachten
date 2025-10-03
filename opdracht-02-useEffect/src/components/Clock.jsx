import { useState, useEffect } from "react";

const Clock = () => {

    const [currentTime , setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            console.log('tick');
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h1>Clock</h1>
            <p>{currentTime }</p>
        </div>
    );
}

export default Clock;

