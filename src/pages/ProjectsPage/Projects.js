import { useState, useEffect } from "react";

import { Container, Grid } from "@mui/material";

import Layout from "../../layouts/Layout";
import "./projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import useDataStore from "../../store/dataStore";
import { useFetchProjectsData } from "../../utils/hooks";

const Projects = () => {
    const { storeProjects } = useDataStore();
    const [projects, setProjects] = useState([]);

    useFetchProjectsData();

    useEffect(() => {
        if (storeProjects !== null && typeof storeProjects === "object") {
            setProjects(storeProjects);
            console.log(storeProjects);
        }
    }, [storeProjects]);

    const get_projects_as_cards = () => {
        return projects?.map((project) => <ProjectCard key={project._id} projectDetails={project} />);
    };

    return (
        <Layout title="Projects" hasTopBanner={false}>
            <Container>
                <h1>Projects</h1>
            </Container>

            <Container>
                {projects.length ? (
                    <Grid container spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }} columns={{ xs: 1, sm: 1, md: 10, lg: 10 }}>
                        {get_projects_as_cards()}
                    </Grid>
                ) : (
                    <div>Woops! It looks like there are no projects...</div>
                )}
            </Container>
        </Layout>
    );
};

export default Projects;
