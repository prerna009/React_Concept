// useReducer - Alternative to useState for complex state logic.

import { useReducer } from "react";

function Reducer(state: any, action: any) {
    switch(action.type) {
        case "increment": return { count: state.count + 1 };
        case "decrement": return { count: state.count - 1 };
        default: return state;
    }
}

function ReducerCounter() {
    const [state, dispatch] = useReducer(Reducer, { count: 0 });

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </div>
    )
}

export default ReducerCounter;