import About from "../components/about";
import Contact from "../components/contact";
import Dashboard from "../components/dashboard";
import Home from "../components/home";
import Profile from "../components/profile";
import Settings from "../components/settings";

const routes = [
    {
        path: '/', 
        element: <Home />
    },
    {
        path: '/about', 
        element: <About />
    },
    {
        path: '/contact', 
        element: <Contact />
    },
    {
        path: '/dashboard', 
        element: <Dashboard />, 
        children: [
            {
                path: 'profile', element: <Profile />
            },
            {
                path: 'settings', element: <Settings />
            }
        ]
    },
    {
        path: '*', element: <h2>404 - Page Not Found</h2>
    },
];

export default routes;