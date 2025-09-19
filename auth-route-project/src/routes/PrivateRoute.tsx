import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider"
import type { JSX } from "react";

const PrivateRoute = ({ children }: {children: JSX.Element}) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;