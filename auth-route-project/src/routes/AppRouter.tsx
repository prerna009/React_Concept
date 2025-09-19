import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../auth/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";

function AppRouter() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />

                    {/* Private routes */}
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default AppRouter;