import { useEffect } from "react";

const Projects = () => {
    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <div className="container">
            <h1>Projects</h1>
        </div>
    );
};

export default Projects;
