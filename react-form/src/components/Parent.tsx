// sharing state in sibling component

import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
    const [text, setText] = useState('');

    return (
        <div>
            <ChildA value={text} onChange={setText} />
            <ChildB value={text} />
        </div>
    );
}

export default Parent;