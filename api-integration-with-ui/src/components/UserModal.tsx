import type { User } from "../models/User";

interface Props {
    user: User;
    onClose: () => void;
}

export default function UserModal({ user, onClose }: Props) {
    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{ background: "#fff", padding: 20, borderRadius: 8, minWidth: 300 }}>
                <h3>User Details: {user.id}</h3>
                <p><b>Name:</b> {user.name}</p>
                <p><b>Email:</b> {user.email}</p>
                {
                    user.address.city &&
                    <p><b>City: </b> {user.address.city}</p>
                }
                {
                    user.address.street &&
                    <p><b>Street: </b> {user.address.street}</p>
                }
                {
                    user.address.zipcode &&
                    <p><b>ZipCode: </b> {user.address.zipcode}</p>
                }
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}