import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Projects from "../pages/ProjectsPage/Projects";
import NotFound from "../pages/NotFoundPage/NotFound";
import Contact from "../pages/ContactPage/Contact";
import Resume from "../pages/ResumePage/Resume";

export const PATHS = {
    landing: {path: "/", title: "Home"},
    projects: {path: "/projects", title: "Projects"},
    contact: {path: "/contact", title: "Contact"},
    resume: {path: "/resume", title: "Resume"},
    any: {path: "/*", title: "Any"},
};

export const router = createBrowserRouter([
    {
        path: PATHS.landing.path,
        element: <App />,
        children: [
            { path: "", element: <Home /> },
            { path: PATHS.projects.path, element: <Projects /> },
            { path: PATHS.contact.path, element: <Contact /> },
            { path: PATHS.resume.path, element: <Resume /> },
            { path: PATHS.any.path, element: <NotFound /> },
        ],
    },
]);
