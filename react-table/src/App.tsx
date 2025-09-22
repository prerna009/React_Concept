import './App.css'
import DataGridExample from './components/material-UI/datagrid'
import ReactDataTableComponent from './components/simple-example/react-datatable'
import ReactSkeletonExample from './components/library/react-skeleton'
import SimpleSkeletonExample from './components/simple-example/simple-skeleton'
import MuiSkeleton from './components/material-UI/skeleton'

function App() {
   return (
    <div>
      <SimpleSkeletonExample />
      <ReactSkeletonExample />
      <MuiSkeleton />
      <ReactDataTableComponent/> 
      <DataGridExample/>
    </div>
   )
}

export default App
