import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>Increment by Amount</button>
        </div>
    );
}

export default Counter;