import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage/Home";
import Projects from "../pages/ProjectsPage/Projects";
import NotFound from "../pages/NotFoundPage/NotFound";
import Contact from "../pages/ContactPage/Contact";
import Resume from "../pages/ResumePage/Resume";
import ProjectPage from "../pages/ProjectPage/Project";

export const PATHS = {
    landing: { path: "/", title: "Home" },
    projects: { path: "/projects", title: "Projects" },
    contact: { path: "/contact", title: "Contact" },
    resume: { path: "/resume", title: "Resume" },
};

export const router = createBrowserRouter([
    {
        path: PATHS.landing.path,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "", element: <Home /> },
            {
                path: PATHS.projects.path,
                element: <Outlet />,
                children: [
                    { index: true, element: <Projects /> },
                    { path: ":id", element: <ProjectPage /> },
                ],
            },
            { path: PATHS.contact.path, element: <Contact /> },
            { path: PATHS.resume.path, element: <Resume /> },
        ],
    },
]);
