import { useAuth } from "../auth/AuthProvider";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Welcome to Dashboard 🚀</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
