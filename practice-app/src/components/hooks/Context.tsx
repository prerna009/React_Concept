// useContext - Consumes values from React Context.

import { createContext, useContext } from "react";

const ThemeContext = createContext('light');

function ContextTheme() {
    const theme = useContext(ThemeContext);
    return <p>Theme is {theme}</p>;
}

function ContextApp() {
    return (
        <div>
            <ThemeContext.Provider value="dark">
                <ContextTheme />
            </ThemeContext.Provider>

            <ThemeContext.Provider value="blue">
                <ContextTheme />
            </ThemeContext.Provider>
        </div>
    )
}

export default ContextApp;