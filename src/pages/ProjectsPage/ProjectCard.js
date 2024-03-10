import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { urlForImage } from "../../utils/sanityImage";

const ProjectCard = ({ project_details }) => {
    const { _id, name, description, versionedProjectLink } = project_details;
    return (
        <div key={_id} className="project-preview-card">
            <div className="top bg-image-wrapper">
                <img src={urlForImage(project_details.projectThumbnail)} alt={`Thumbnail for the ${name} project`} />
            </div>

            <div className="bottom">
                <h1>{project_details.name}</h1>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
            <a className="project-repo-url" href={versionedProjectLink.url}>
                <span>See on {versionedProjectLink.platform.title}</span> <BsFillArrowRightSquareFill />
            </a>
        </div>
    );
};

export default ProjectCard;
