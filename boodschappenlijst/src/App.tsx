import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import Profiel from './components/Profiel'
import NotFound from './components/NotFound'

const Root = () => {
    return (
        <div>
            <header>
              <h1>logo </h1>
              <nav>
                <div>
                  <NavLink to="/" > Home </NavLink>
                  <NavLink to="Profiel"> Profiel </NavLink>
                </div>
              </nav>
            </header>

            <div>
                <Outlet/>
            </div>
            <footer>
              <div>
                <div>
                  <label htmlFor="name">name:</label>
                  <input type="text" id="name" />
                </div>
                <button onClick={() => { console.log("welko bericht");}}>log in</button>
              </div>
            </footer>
        </div>
    );
}

const HomePage = () => {
    return (
        <Home />
    );
}

const ProfielPage = () => {
    return (
        <Profiel />
    );
}

const PageNotFound = () => {
  return (
      <NotFound />
  );
}

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "Profiel",
                    element: <ProfielPage />
                },
                {
                  path: "*",
                  element: <PageNotFound />
              }

            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;  