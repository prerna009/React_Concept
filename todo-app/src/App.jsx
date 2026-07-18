import List from "./List";
import Todo from "./Todo";
import Box from "./Box";
import Button from "./Button";
import TrafficLight from "./TrafficLight";
import MemoryGame from "./MemoryGame";
import WhackHole from "./WhackHole";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 50 }}>
      <WhackHole />
      <MemoryGame />
      <TrafficLight />
      <Button />
      <Box />
      <List />
      <Todo /> 
    </div>
  );
}

export default App;