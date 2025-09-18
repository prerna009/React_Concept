import { BrowserRouter, HashRouter, Link, MemoryRouter, Route, Routes, StaticRouter } from "react-router-dom";
import routes from "./routeConfig";

function renderRoutes(routeList: any[]) {
  return routeList.map((route, index) => (
    <Route key={index} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}

function DefineRouter() {
    return (
        <div>
            <Routes>
                {/* one way */}
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}>
                        {route.children && route.children.map((child, i) => (
                            <Route key={i} path={child.path} element={child.element} />
                        ))}
                    </Route>
                ))}

                {/* second way - using recursive fucntion */}
                {renderRoutes(routes)}
            </Routes>
        </div>
    );
}

function AppRouter() {
    return (
        <div>
            {/* BrowserRouter Example */}
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link> | {" "}
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <DefineRouter />
            </BrowserRouter>

            {/* HashRouter Example */}
            <HashRouter>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link> | {" "}
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <DefineRouter />
            </HashRouter>

            {/* MemoryRouter Example */}
            <MemoryRouter initialEntries={["/about"]}>  { /* starting mai about page rahega */}
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link> | {" "}
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <DefineRouter />
            </MemoryRouter>

            {/* StaticRouter Example */}
            <StaticRouter location={"/about"}> {/* manually passed url, best for pre-render */}
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="/about">About</Link> | {" "}
                    <Link to="/contact">Contact</Link> | {" "}
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
                <DefineRouter />
            </StaticRouter>
        </div>
    );
}

export default AppRouter;