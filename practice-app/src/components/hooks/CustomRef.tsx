// useImperativeHandle - Customizes the instance value exposed when using ref.

import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef(({}, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current?.focus()
    }));

    return <input ref={inputRef} />;
});

function CustomRef() {
    const ref = useRef<any>(null);
    return(
        <>
        <CustomInput ref={ref} />
        <button onClick={() => ref.current?.focusInput()}>Focus via Ref</button>
        </>
    );
};

export default CustomRef;