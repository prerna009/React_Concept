import { useState } from "react";

function Accordion() {
    const data = [
        {
            title: "What is React?",
            content: "React is a JavaScript library."
        },
        {
            title: "What is Angular?",
            content: "Angular is a framework."
        },
        {
            title: "What is Vue?",
            content: "Vue is a progressive framework."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div>
            <h2>Single Accordion Example</h2>
            {data.map((d, index) => (
                <div key={index} style={{ padding: 10 }}>
                <button onClick={() => handleClick(index)}>
                    {d.title}
                </button>

                {openIndex === index && (
                    <p>{d.content}</p>
                )}
                </div>
            ))}
        </div>
    )
}

export default Accordion;