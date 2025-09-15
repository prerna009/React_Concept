// useMemo - Memoizes a computed value.

import { useMemo } from "react";

function ExpensiveCalc({ num }: { num: number }) {
    const result = useMemo(() => {
        console.log('Calculating...');
        return num * 2
    }, [num]);

    return <p>Result: {result}</p>
}

export default ExpensiveCalc;