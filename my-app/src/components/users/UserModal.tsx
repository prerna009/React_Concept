import type React from "react";
import type { User } from "../../interfaces/User";

interface Props {
    user: User | null,
    onClose: () => void,
}

const UserModal: React.FC<Props> = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                width: '300px'
            }}>
                <button onClick={onClose} style={{ float: "right" }}>X</button>
                <h2>{user.name}</h2>
                <p><b>Email: </b>{user.email}</p>
                <p><b>Phone: </b>{user.phone}</p>
                <p><b>Address: </b>{user.address.city}</p>
            </div>
        </div>
    );
};

export default UserModal;