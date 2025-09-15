import { useState } from "react"

function TwoWayBinding() {
    const [name, setName] = useState('');

    return (
        <div>
            <input type="text" name={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <p>Name: {name}</p>
        </div>
    );
}

export default TwoWayBinding;