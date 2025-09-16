import { useState } from 'react'

function SetNameField() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = () => {
    setResult(name);
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <p>Name: {result}</p>
    </div>
  )
}

export default SetNameField;
