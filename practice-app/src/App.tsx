import './App.css'
import DataType from './components/DataType'
import ContextApp from './components/hooks/Context'
import Counter from './components/hooks/Counter'
import CustomRef from './components/hooks/CustomRef'
import FetchUsers from './components/hooks/FetchUser'
import InputFocus from './components/hooks/InputFocus'
import ReducerCounter from './components/hooks/Reducer'

function App() {
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
    </div>
  )
}

export default App;
