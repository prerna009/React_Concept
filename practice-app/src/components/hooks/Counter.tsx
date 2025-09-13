// useState - Manages state in a function component.

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p><b>Count: </b>{count}</p>
            <button onClick={() => setCount(count + 1)} style={{ cursor: 'pointer'}}>Increment</button>&nbsp;
            <button onClick={() => count > 0 ? setCount(count - 1) : ''} style={{ cursor: 'pointer'}}>Decrement</button>
        </div>
    );
};

export default Counter;