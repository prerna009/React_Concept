// useRef - Holds mutable values or DOM references.

import { useRef } from "react";

function InputFocus() {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
        </div>
    );
};

export default InputFocus;