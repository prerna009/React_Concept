import { useState } from "react";

type User = { id: number, name: string };
type ButtonProps = {
    onClick: () => void;
};

export default function DataType() {
    const [name] = useState<string>("Prerna");
    const [age] = useState<number>(23);
    const [isLoggedIn] = useState<boolean>(true);
    const [user] = useState<string | null>(name);
    const [userObj] = useState<User>({ id: 1, name: 'Prerna' });
    const [fruits] = useState<string[]>(["Apple", "Banana"]);
    const [position] = useState<[number, number]>([0,0]);
    const Button = ({ onClick }: ButtonProps ) => (
        <button onClick={onClick}>Click</button>
    );

    return (
        <div>
            {/* string data type */}
            <h2>Hello, {name}</h2> 

            {/* number */}
            <p>Age: {age}</p>

            {/* boolean and conditional based */}
            { 
            (name === 'Prerna' && isLoggedIn) ? <p>Welcome back!</p> : <p>Please login.</p>
            }

            {/* null or undefined */}
            <p>{ user ? `Hello, ${user}` : "No user logged in" }</p>

            {/* object ex */}
            <p>{userObj.id} - {userObj.name}</p>

            {/* array ex */}
            <ul>
                {
                    fruits.map((f, index) => (
                        <li key={index}>{f}</li>
                    ))
                }
            </ul>

            {/* tuple ex */}
            <p>Position: {position[0]}, {position[1]}</p>

            {/* Functions */}
            <Button onClick={() => alert("Clicked!")} />
        </div>
    );
}