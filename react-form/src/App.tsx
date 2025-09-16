import './App.css'
import ControlledForm from './components/ControlledForm'
import Calculator from './components/LiftingState'
import LoginForm from './components/LoginFormUsingFormik'
import MultiInputForm from './components/MultiInputForm'
import Parent from './components/Parent'
import RegistrationForm from './components/RegistrationFormWithRHF'
import SetNameField from './components/SetName'
import SimpleForm from './components/SimpleForm'
import UncontrolledForm from './components/UncontrolledForm'
import ValidatedForm from './components/ValidatedForm'

function App() {
  return (
    <div>
      <h3>Simple Form Example</h3>
      <SimpleForm/>

      <h3>Controlled Form Example</h3>
      <ControlledForm/>

      <h3>Uncontrolled Form Example</h3>
      <UncontrolledForm/>

      <h3>Multi Input Form Example</h3>
      <MultiInputForm/>

      <h3>Validated Form Example</h3>
      <ValidatedForm/>

      <h3>Formik Example</h3>
      <LoginForm/>

      <h3>React Hook Form Example</h3>
      <RegistrationForm/>

      <h3>Set Name Field Example</h3>
      <SetNameField/>

      <h3>Lifting State: Temperature Example</h3>
      <Calculator/>

      <h3>Sibling State Sharing Example</h3>
      <Parent/>
    </div>
  )
}

export default App
