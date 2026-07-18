import { useState } from "react";

const btnStyle = { 
    padding: "10px 20px", 
    backgroundColor: "blue", 
    color: "white", 
    cursor: "pointer",
    border: "none",
    borderRadius: "10%",
};

export default function TrafficLight() {
    const colors = ["red", "green", "yellow"];

    const [signalColor, setSignalColor] = useState(colors[0]);
    const [intervalId, setIntervalId] = useState(null);

    const startInterval = () => {
        if (intervalId) return;

        let index = 0;

        const id = setInterval(() => {
            index = (index + 1) % colors.length;
            setSignalColor(colors[index]);
        }, 2000);

        setIntervalId(id);
    };

    const stopInterval = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    };

    return (
        <div>
            <h2>Traffic Light Game</h2>
            <button onClick={startInterval} style={btnStyle}>Start</button>
            <button onClick={stopInterval} style={btnStyle}>Stop</button>

            <div
                style={{
                    backgroundColor: signalColor,
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    margin: 20,
                }}
            ></div>
        </div>
    )
}