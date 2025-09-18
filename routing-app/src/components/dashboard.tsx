import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <nav>
                <Link to="profile">Profile</Link> | {" "}
                <Link to="settings">Settings</Link>
            </nav>

            <Outlet/>
        </div>
    );
}

export default Dashboard;