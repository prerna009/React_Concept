import { useState } from "react";

const btnStyles = {
    border: "none",
    borderRadius: "5%",
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    cursor: "pointer",
}

export default function MemoryGame() {
    const size = 4;
    const delay = 500;
    const columns = Math.sqrt(size);

    const [selectedIds, setSelectedIds] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const [boxes, setBoxes] = useState(() =>
        Array.from({ length: size }, (_, i) => ({
            id: i + 1,
            selected: false,
        }))
    );

    const resetSelectedBoxes = () => {
        setBoxes((boxes) => boxes.map((box) => ({ ...box, selected: false })));
    };

    const resetGame = () => {
        resetSelectedBoxes();
        setIsPlaying(false);
        setSelectedIds([]);
    };

    const replayPattern = (ids) => {
        setIsPlaying(true);

        // reset selected boxes
        resetSelectedBoxes();

        // replay pattern
        ids.forEach((id, index) => {
            setTimeout(() => {
                setBoxes((boxes) =>
                    boxes.map((box) => box.id === id ? { ...box, selected: true } : box)
                );
            }, (index + 1) * delay)
        });

        // finish pattern reset boxes & stop playing
        setTimeout(() => {
            resetSelectedBoxes();
            setIsPlaying(false);
        }, (ids.length + 1) * delay);
    };

    const handleSelectedBoxes = (selectedBox) => {
        if (isPlaying || selectedIds.includes(selectedBox.id)) return;

        const updated = [...selectedIds, selectedBox.id];

        setSelectedIds(updated);

        setBoxes((boxes) =>
            boxes.map((box) => box.id === selectedBox.id ? { ...box, selected: true } : box)
        );

        if (updated.length === size) {
            setTimeout(() => {
                replayPattern(updated);
            }, delay);
        }
    }

    return (
        <div>
            <h2>Memory Box Game</h2>
            {/* Buttons */}
            <div>
                <button style={btnStyles} onClick={() => replayPattern(selectedIds)}>Replay Pattern</button>
                <button style={btnStyles} onClick={resetGame}>Reset Game</button>
            </div>

            {/* Box */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 60px)`,
                    gap: 4,
                    margin: 10,
                }}
            >
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        style={{
                            backgroundColor: box.selected ? "green" : "white",
                            border: "1px solid black",
                            width: 50,
                            height: 50,
                            cursor: box.selected ? "default" : "pointer",
                        }}
                        onClick={() => handleSelectedBoxes(box)}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}