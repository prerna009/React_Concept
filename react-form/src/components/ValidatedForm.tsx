import { useState } from "react"

function ValidatedForm() {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!email.includes('@')) {
            setError('Invalid email address!');
        } else {
            setError('');
            alert('Form submitted successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p> }
        </form>
    );
}

export default ValidatedForm;