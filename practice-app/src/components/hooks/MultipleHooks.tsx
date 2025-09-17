// using multiple hooks together

import { useCallback, useEffect, useMemo, useState } from "react";

function MultipleHooks() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([1,2,3]);

    // expensive calculation memoized
    const total = useMemo(() => items.reduce((a,b) => a+b,0), [items]);

    //memoized function
    const addItem = useCallback(() => {
        setItems([...items, items.length + 1]);
    }, [items]);

    // side effect
    useEffect(() => {
        console.log("Count Updated: ", count);
    }, [count]);

    return (
        <div>
            <h3>Count: {count}</h3>
            <h4>Total: {total}</h4>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}

export default MultipleHooks;