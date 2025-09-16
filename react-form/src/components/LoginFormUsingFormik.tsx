import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import './LoginFormUsingFormik.css';

const LoginForm = () => {
    return (
        <Formik initialValues={{ email:'', password: '' }} 
        validationSchema={Yup.object({
            email: Yup.string().email("Invalid Email").required("Email is required"),
            password: Yup.string().min(6, "Must be atleast 6 characters").required("Password is required"),
        })} 
        onSubmit={(response) => {
            console.log("Form submitted: ", response);
        }}
        >
            <Form>
                <div>
                    <label>Email:</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div>
                    <label>Password:</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" component="div" className="error-message" />
                </div>

                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default LoginForm;