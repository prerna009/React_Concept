import { Route, Routes } from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import Home from "./home";

function DefineRouter() {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
        </div>
    );
}

export default DefineRouter;