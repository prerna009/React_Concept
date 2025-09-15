import { useState } from "react";

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <div>
            {
                isLoggedIn ? (
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
                )
            }

            <p>{isLoggedIn ? <h4>Welcome back!</h4> : <h4>Please Login.</h4>}</p>
        </div>
    );
}

export default LoginControl;