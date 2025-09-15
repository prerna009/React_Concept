// useLayoutEffect - Similar to useEffect, but runs synchronously after DOM updates.

import { useLayoutEffect, useRef } from "react";

function LayoutEffectBox() {
    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (boxRef.current) {
            boxRef.current.style.background = 'yellow';
        }
    }, []);

    return <div ref={boxRef}>Hello</div>
}

export default LayoutEffectBox;