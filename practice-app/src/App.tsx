import { useState } from 'react'
import './App.css'
import DataType from './components/DataType'
import Callback from './components/hooks/Callback'
import ContextApp from './components/hooks/Context'
import Counter from './components/hooks/Counter'
import CustomRef from './components/hooks/CustomRef'
import FetchUsers from './components/hooks/FetchUser'
import InputFocus from './components/hooks/InputFocus'
import LayoutEffectBox from './components/hooks/LayoutEffect'
import ExpensiveCalc from './components/hooks/Memo'
import ReducerCounter from './components/hooks/Reducer'
import LoginControl from './components/hooks/ConditionalRendering'
import TwoWayBinding from './components/hooks/TwoWayBinding'

function App() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <DataType />

      <h2>Hooks Example</h2>

      <h4>Use State: Counter Example</h4>
      <Counter />

      <h4>Use Effect: User List</h4>
      <FetchUsers />

      <h4>Use Context: Theme Example</h4>
      <ContextApp/>

      <h4>Use Reducer: Counter Example</h4>
      <ReducerCounter/>

      <h4>Use Ref: Input Example</h4>
      <InputFocus/>

      <h4>Use Imperative Handle Example</h4>
      <CustomRef/>

      <h4>Use Layout Effect Example</h4>
      <LayoutEffectBox />

      <h4>Callbaack Example</h4>
      <Callback/>

      <h4>Memo Example</h4>
      <ExpensiveCalc num={num}/>
      <button onClick={() => setNum(num + 1)}>Increase</button>

      <h2>Conditional Rendering Example</h2>
      <LoginControl/>

      <h2>Two Way Binding Example</h2>
      <TwoWayBinding/>
    </div>
  )
}

export default App;
