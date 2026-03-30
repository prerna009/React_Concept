import { useState } from "react";

const list = [
    { id: 1, name: "Prerna", isChecked: true },
    { id: 2, name: "Jyoti", isChecked: false },
    { id: 3, name: "Sandhya", isChecked: false },
];

function List() {
    const [data, setData] = useState(list);
    const [newArr, setNewArr] = useState(
        list.filter((item) => item.isChecked)
    );

    const pushList = (checked, item) => {
        const updatedData = data.map((d) =>
            d.id === item.id ? { ...d, isChecked: checked } : d
        );
        setData(updatedData);

        if (checked) {
            setNewArr((prev) => [...prev, item]);
        } else {
            setNewArr((prev) => prev.filter((i) => i.id !== item.id))
        }
    };

    return (
        <div>
            <h2>Checkbox Example</h2>
            <div>
                {data.length > 0 && (
                    data.map((l) => (
                        <div key={l.id}>
                            <span>{l.name}</span>
                            <input
                                type="checkbox"
                                checked={l.isChecked}
                                onChange={(e) => pushList(e.target.checked, l)}
                            />
                        </div>
                    ))
                )}
            </div>

            <h3>Selected Item:</h3>
            <div>
                {newArr.map((item) => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
}

export default List;