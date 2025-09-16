function ChildA({ value, onChange }: any) {
    return (
        <div>
            <h3>Child A</h3>
            <input value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

export default ChildA;