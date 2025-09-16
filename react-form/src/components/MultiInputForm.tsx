import { useState } from "react";

function MultiInputForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleDefault = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleDefault} placeholder="Username" />
            <input type="password" name="password" value={formData.password} onChange={handleDefault} placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default MultiInputForm;