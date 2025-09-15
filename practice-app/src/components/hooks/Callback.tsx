// useCallback - Memoizes a function so it doesn’t get recreated on every render.

import { useCallback, useState } from "react";

function Callback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount(c => c + 1), []);

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Callback;