import { useState } from "react";

const dummyData = [
  { id: 1, name: "Prerna", completed: false },
  { id: 2, name: "Jyoti", completed: true },
  { id: 3, name: "sandhaya", completed: false },
];

function Todo() {
  const [list, setList] = useState(dummyData);
  const [input, setInput] = useState("");
  const [action, setAction] = useState("Add");
  const [editId, setEditId] = useState(null);

  const handleEdit = (data) => {
    setInput(data.name);
    setEditId(data.id);
    setAction("Edit");
  };

  const handleDelete = (data) => {
    const updatedData = list.filter((l) => l.id !== data.id);
    setList(updatedData);
  };

  const handleSubmit = () => {
    if (action === "Edit") {
      const updatedData = list.map((l) =>
        l.id === editId
          ? { ...l, name: input }
          : l
      );

      setList(updatedData);
      setEditId(null);
      setAction("Add");
    } else {
      const newData = {
        id: Date.now(),
        name: input,
      };

      setList([...list, newData]);
    }
    setInput("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h2>Todo List</h2>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a name"
        />

        <button onClick={handleSubmit}>
          {action === "Add" ? "Add" : "Update"}
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {list && list.length > 0 && (
          list.map((l) => (
            <li key={l.id} style={{ margin: "10px 0" }}>
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: l.completed ? "line-through" : "none",
                  marginRight: "10px"
                }}
              >
                {l.name}
              </span>
              <button onClick={() => handleEdit(l)}>Edit</button>
              <button onClick={() => handleDelete(l)}>Delete</button>
            </li>
          ))
        )
        }
      </ul>
    </div>
  );
}

export default Todo;