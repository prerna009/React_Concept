import { BrowserRouter, Link } from "react-router-dom";
import DefineRouter from "./Router";

function AppRouter() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/home">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/contact">Contact</Link>
            </nav>
            <DefineRouter />
        </BrowserRouter>
    );
}

export default AppRouter;