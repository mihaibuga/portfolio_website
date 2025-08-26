import { useState, useEffect } from "react";

import { Container } from "@mui/material";

import Layout from "../../layouts/Layout";
import "./projects.scss";
import ProjectCardV2 from "../../components/ProjectCardV2/ProjectCardV2";
import useDataStore from "../../store/dataStore";
import { useFetchProjectsData } from "../../utils/hooks";

const Projects = () => {
    const { storeProjects } = useDataStore();
    const [projects, setProjects] = useState([]);

    useFetchProjectsData();

    useEffect(() => {
        if (storeProjects !== null && typeof storeProjects === "object") {
            setProjects(storeProjects);
        }
    }, [storeProjects]);

    const get_projects_as_cards = () => {
        return projects?.map((project) => <ProjectCardV2 key={project._id} projectDetails={project} />);
    };

    return (
        <Layout title="Projects" hasTopBanner={false}>
            <Container>
                <h1>Projects</h1>
            </Container>

            <Container>
                {projects.length ? (
                    <div className="projects-grid-cards">{get_projects_as_cards()}</div>
                ) : (
                    <div>Woops! It looks like there are no projects...</div>
                )}
            </Container>
        </Layout>
    );
};

export default Projects;
