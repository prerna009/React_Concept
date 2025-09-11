import type React from "react";
import type { User } from "../../interfaces/User";

interface Props {
    user: User,
    onClick: (user: User) => void
}

const UserCard: React.FC<Props> = ({user, onClick}) => {
    return (
        <div style={{ 
            padding: '20px',
            margin: '8px',
            borderRadius: '6px',
            border: '1px solid #ccc',
        }}>
            <h3 style={{ cursor: 'pointer' }} onClick={() => onClick(user)}>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

export default UserCard;