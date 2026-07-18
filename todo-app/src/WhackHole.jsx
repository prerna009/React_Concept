import { useEffect, useState } from "react";

const SIZE = 9;
const GAME_DURATION = 30;
const MOLE_INTERVAL = 1000;
const WINNING_SCORE = 10;

export default function WhackHole() {
    const columns = Math.sqrt(SIZE);

    const createBoxes = () =>
        Array.from({ length: SIZE }, (_, i) => ({
            id: i + 1,
            selected: false,
        }));

    const [boxes, setBoxes] = useState(createBoxes);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [gameOver, setGameOver] = useState(false);
    const [gameKey, setGameKey] = useState(0);

    useEffect(() => {
        setBoxes(createBoxes());
        setScore(0);
        setTimeLeft(GAME_DURATION);
        setGameOver(false);

        const gameInterval = setInterval(() => {
            const num = Math.floor(Math.random() * SIZE) + 1;
            setBoxes((boxes) =>
                boxes.map(box => ({ ...box, selected: box.id === num }))
            );
        }, MOLE_INTERVAL);

        const countdownInterval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(countdownInterval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Game Over
        const timer = setTimeout(() => {
            clearInterval(gameInterval);
            clearInterval(countdownInterval);

            setGameOver(true);

            setBoxes((prev) =>
                prev.map((box) => ({
                    ...box,
                    selected: false,
                }))
            );
        }, GAME_DURATION * 1000);

        return () => {
            clearInterval(gameInterval);
            clearInterval(countdownInterval);
            clearTimeout(timer);
        };
    }, [gameKey]);

    const handleClick = (box) => {
        if (gameOver || !box.selected) return;

        setScore((prev) => prev + 1);

        setBoxes((prev) =>
            prev.map((b) =>
                b.id === box.id ? { ...b, selected: false } : b
            )
        );
    };

    const restartGame = () => {
        setGameKey((prev) => prev + 1);
    };

    return (
        <div>
            <h2>Whack-a-Mole</h2>

            <button onClick={restartGame}>
                Restart
            </button>

            <h3>Timer Left: {timeLeft}s</h3>
            <h3>Score: {score}</h3>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${columns}, 60px)`,
                    gap: 8,
                    marginTop: 20,
                }}
            >
                {boxes.map((box) => (
                    <div
                        key={box.id}
                        style={{
                            width: 60,
                            height: 60,
                            border: "1px solid black",
                            backgroundColor: box.selected ? "green" : "white",
                            cursor:
                                !gameOver && box.selected
                                    ? "pointer"
                                    : "default",
                            transition: "background-color 0.2s ease",
                        }}
                        onClick={() => handleClick(box)}
                    >
                    </div>
                ))}
            </div>

            {gameOver && (
                <div style={{ marginTop: 20 }}>
                    <h2>Game Over</h2>

                    <h3>
                        {score >= WINNING_SCORE
                            ? "You Won!"
                            : "You Lost!"}
                    </h3>

                    <h3>Final Score: {score}</h3>
                </div>
            )}
        </div>
    )
}