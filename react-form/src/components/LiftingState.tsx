import { useState } from "react";

function TemperatureInput({ temperature, onTemperatureChange }: any) {
    return (
        <div>
            <label>Enter temperature in Celsius: </label>
            <input
                type="number"
                value={temperature}
                onChange={(e) => onTemperatureChange(e.target.value)}
            />
        </div>
    );
}

function BoilingVerdict({ temperature }: any) {
    return (
        <p>
            {(temperature <= 0)
                ? "Water is freezed"
                : (temperature > 0 && temperature < 100)
                    ? "Water is not boiled"
                    : (temperature >= 100 && temperature <= 200)
                        ? "Water is boiled"
                        : (temperature > 200)
                            ? "Water is evaporated"
                            : ""
            }
        </p>
    );
}

function Calculator() {
    const [temperature, setTemperature] = useState(0);

    return (
        <div>
            <TemperatureInput
                temperature={temperature}
                onTemperatureChange={setTemperature}
            />
            <BoilingVerdict temperature={Number(temperature)} />
        </div>
    );
}

export default Calculator;
