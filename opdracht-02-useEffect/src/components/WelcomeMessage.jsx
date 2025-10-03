import { useState, useEffect } from "react";

const WelcomeMessage = () => { 
    const [message, setMessage] = useState("Welkom op mijn website");
    useEffect(() => {
    const currentTime = new Date().getHours();
    const newMessage = currentTime < 12 ? "Goedemorgen" : currentTime < 18 ? "Goedemiddag" : "Goedenavond";
    setMessage(newMessage);
    }   , []);

    return (
        <div>
            <h1>WelcomeMessage</h1>
            <p>{message}</p>
        </div>
    );
}

export default WelcomeMessage;