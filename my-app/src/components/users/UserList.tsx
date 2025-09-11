import type React from "react";
import { useEffect, useState } from "react";
import type { User } from "../../interfaces/User";
import { getUsers } from "../../services/userService";
import UserCard from "./UserCard";
import UserModal from "./UserModal";

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then((data) => {
            setUsers(data),
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading users...</p>;

    return (
        <div>
            <h2>User List</h2>
            {
                users.map((u) => (
                    <UserCard key={u.id} user={u} onClick={setSelectedUser} />
                ))
            }

            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        </div>
    );
};

export default UserList;