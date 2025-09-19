import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
// import { toast } from "react-toastify";
import { enqueueSnackbar } from "notistack";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === "admin" && password === "1234") {
            login();
            // toast.success("Login successful");
            enqueueSnackbar("Login successful!", { variant: "success" });
            navigate("/dashboard");
        } else {
            // toast.error("Invalid Credentials");
            enqueueSnackbar("Invalid Credential!", { variant: "error" });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Page</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;