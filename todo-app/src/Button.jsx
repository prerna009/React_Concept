import { useEffect, useState } from "react";

const worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });

export default function ButtonExample() {
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        worker.onmessage = (message) => {
            alert("Sum = " + message.data);
        }
    }, []);

    const calculateSum = () => {
        worker.postMessage("sum");
    };

    const changeBackground = () => {
        setBackgroundColor(prev => prev === "red" ? "white" : "red");
    };

    return (
        <div>
            <button onClick={calculateSum}>Calculate Sum</button>
            <button onClick={changeBackground} style={{ backgroundColor: backgroundColor }}>Change BackgroundColor</button>
        </div>
    );
}