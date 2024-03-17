import React from "react";
import { Link } from "react-router-dom";
import "./projectCardV2.scss";
import { urlForImage } from "../../utils/sanityImage";
import * as ROUTES from "../../routes/routes";

const ProjectCardV2 = ({ projectDetails }) => {
    const { _id, name, projectThumbnail } = projectDetails;

    return (
        <div className="project-preview-card-v2 wrapper">
            <Link className="card-wrapping-link" to={`${ROUTES.PATHS.projects.path}/${_id}`}>
                <div key={_id} className="inner-content">
                    <div className="top bg-image-wrapper">
                        <img
                            src={urlForImage(projectThumbnail)}
                            alt={`Thumbnail for the ${name} project`}
                        />
                    </div>

                    <div className="bottom">
                        <h1>{name}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCardV2;
