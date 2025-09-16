import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be atleast 6 characters").required("Password is required"),
});

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username:</label>
                <input {...register("username")} />
                { errors.username && <p style={{ color: 'red' }}>{ errors.username.message }</p> }
            </div>

            <div>
                <label>Email:</label>
                <input type="email" {...register("email")} />
                { errors.email && <p style={{ color: 'red' }}>{ errors.email.message }</p> }
            </div>

            <div>
                <label>Password:</label>
                <input type="password" {...register("password")} />
                { errors.password && <p style={{ color: 'red' }}>{ errors.password.message }</p> }
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;