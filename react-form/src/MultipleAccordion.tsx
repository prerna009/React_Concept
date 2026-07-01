import { useState } from "react";

function MultipleAccordion() {
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

    const [openItems, setOpenItems] = useState<any[]>([]);

    const toggle = (index: number) => {
        if (openItems.includes(index)) {
            setOpenItems(openItems.filter(i => i !== index));
        } else {
            setOpenItems([...openItems, index]);
        }
    };

    return (
        <div>
            <h2>Multiple Accordion Example</h2>

            {data.map((d, index) => (
                <div key={index} style={{ padding: 10 }}>
                    <button onClick={() => toggle(index)}>
                        {d.title}
                    </button>

                    {openItems.includes(index) && (
                        <p>{d.content}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default MultipleAccordion;