import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";

export const LANDING = '/';
export const PROJECTS = '/projects';
export const CONTACT = '/contact';
export const ANY = '*';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: PROJECTS, element: <Projects /> },
            { path: CONTACT, element: <Contact /> },
            { path: ANY, element: <NotFound /> },
        ],
    },
]);