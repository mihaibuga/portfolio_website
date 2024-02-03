import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Layout from "../../layouts/Layout";
import "./projects.scss";

const Projects = () => {
    const projects = [
        {
            name: "DungeonCrawl",
            repo_url: "https://github.com/mihaibuga/DungeonCrawl",
            thumbnail_src:
                "https://camo.githubusercontent.com/4f5b718044d575aae5d1f03cc34010212b0f230b69a80f9f736bda4e01664e03/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647177746d396677312f696d6167652f75706c6f61642f76313634323637383236352f44756e67656f6e437261776c2f626567696e6e696e675f75346a6b736e2e706e67",
            description:
                "A classic Roguelike game, with multiple maps, mobs, items and challenges. Navigate a labyrinth environment and battle various monsters to find the escape route from the castle. Built with Unity",
            project_work: "team",
        },
        {
            name: "Online Shop",
            repo_url: "https://github.com/mihaibuga/online-shop",
            thumbnail_src:
                "https://raw.githubusercontent.com/mihaibuga/online-shop/main/src/Codecool.CodecoolShop/wwwroot/img/captures/home-page.png",
            description:
                "Gadgets web store, project developed while being a student at Codecool. ASP .NET Core MVC + React.Js for .NET",
            project_work: "team",
        },
        {
            name: "Ask Mate",
            repo_url: "https://github.com/mihaibuga/ask-mate",
            thumbnail_src: "https://raw.githubusercontent.com/mihaibuga/ask-mate/main/images/captures/home-page.png",
            description:
                "Forum website allowing debating on your preferred topics, opening a new discussion, commenting or even voting. Project built with: Python + Flask + HTML + CSS + PostgreSQL",
            project_work: "team",
        },
        {
            name: "Hogwarts Houses",
            repo_url: "https://github.com/mihaibuga/hogwarts-houses",
            thumbnail_src:
                "https://raw.githubusercontent.com/mihaibuga/hogwarts-houses/main/wwwroot/img/captures/home-page.png",
            description:
                "Manage Hogwarts rooms, capacity in each and students living in them. ASP .NET Web API + React Client",
            project_work: "individual",
        },
    ];

    const create_project_preview_card = (project_details) => (
        <div key={project_details.name} className="project-preview-card">
            <div className="top bg-image-wrapper">
                <img src={project_details.thumbnail_src} alt={`Thumbnail of the ${project_details.name} project`} />
                <div className="project-work-tag">{project_details.project_work} Project</div>
            </div>

            <div className="bottom">
                <h1>{project_details.name}</h1>
                <div className="description">
                    <p>{project_details.description}</p>
                </div>
            </div>
            <a className="project-repo-url" href={project_details.repo_url}>
                See on Github <BsFillArrowRightSquareFill />
            </a>
        </div>
    );

    const get_projects_as_cards = () => {
        return projects.map((project) => create_project_preview_card(project));
    };

    return (
        <Layout title="Projects">
            <div className="spacer" style={{ height: "20px" }}></div>

            <div className="container">
                <h1>Projects</h1>
            </div>

            <div className="spacer" style={{ height: "20px" }}></div>

            <section className="container">
                <div className="projects-grid-cards">{get_projects_as_cards()}</div>
            </section>

            <div className="spacer" style={{ height: "20px" }}></div>
        </Layout>
    );
};

export default Projects;
