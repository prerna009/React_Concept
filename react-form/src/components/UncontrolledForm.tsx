import { useRef } from "react"

function UncontrolledForm() {
    const inputRef = useRef<any>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert(`Input value: ${inputRef.current.value}`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} placeholder="Enter something" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;