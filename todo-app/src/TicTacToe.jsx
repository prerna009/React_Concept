import { useState } from "react";

export default function TicTacToe() {
    const [cells, setCells] = useState(Array(9).fill(""));

    const getCellStyle = (index) => {
        const style = {
            border: "1px solid black",
            width: 50,
            height: 50,
        };

        if ([0, 1, 2].includes(index)) style.borderTop = "none";
        if ([0, 3, 6].includes(index)) style.borderLeft = "none";
        if ([2, 5, 8].includes(index)) style.borderRight = "none";
        if ([6, 7, 8].includes(index)) style.borderBottom = "none";

        return style;
    };

    return (
        <div>
            <h2>TicTacToe Game</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 50px)",
                }}
            >
                {cells.map((c, index) => (
                    <div
                        key={index}
                        style={getCellStyle(index)}
                        onClick={() => startGame(c)}
                    >
                        {c}
                    </div>
                ))}

            </div>
        </div>
    );
};