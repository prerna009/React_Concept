import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;