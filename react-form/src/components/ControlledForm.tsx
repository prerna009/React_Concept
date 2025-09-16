import { useState } from "react"

function ControlledForm() {
    const [email, setEmail] = useState('');

    return (
        <form>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <p>Email: {email}</p>
        </form>
    );
}

export default ControlledForm;