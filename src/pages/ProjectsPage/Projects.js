import { useState, useEffect } from "react";
import Layout from "../../layouts/Layout";
import "./projects.scss";
import ProjectCardV2 from "../../components/ProjectCardV2/ProjectCardV2";
import useDataStore from "../../store/dataStore";

const Projects = () => {
    const { storeProjects } = useDataStore();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if (storeProjects !== null && typeof storeProjects === "object") {
            setProjects(storeProjects);
        }
    }, [storeProjects]);

    const get_projects_as_cards = () => {
        return projects?.map((project) => <ProjectCardV2 key={project._id} projectDetails={project} />);
    };

    return (
        <Layout title="Projects">
            <div className="spacer" style={{ height: "20px" }}></div>

            <div className="container">
                <h1>Projects</h1>
            </div>

            <div className="spacer" style={{ height: "20px" }}></div>

            <section className="container">
                {projects.length ? (
                    <div className="projects-grid-cards">{get_projects_as_cards()}</div>
                ) : (
                    <div>Woops! It looks like there are no projects...</div>
                )}
            </section>

            <div className="spacer" style={{ height: "20px" }}></div>
        </Layout>
    );
};

export default Projects;
