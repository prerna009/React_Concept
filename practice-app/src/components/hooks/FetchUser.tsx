// useEffect - Runs side effects (fetching data, subscriptions, timers).

import { useEffect, useState } from "react";

function FetchUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    return (
        <div>
            {
                users.slice(0,5).map((u: any) => (
                    <p key={u.id}>Name: {u.name}</p>
                ))
            }
        </div>
    );
};

export default FetchUsers;