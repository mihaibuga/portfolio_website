import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { IoMdGitBranch } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import ModalImage from "react-modal-image";
import Layout from "../../layouts/Layout";
import * as ROUTES from "../../routes/routes";
import LinkButtonWithIcon from "../../components/LinkButtonWithIcon/LinkButtonWithIcon";
import useDataStore from "../../store/dataStore";
import { urlForImage } from "../../utils/sanityImage";
import BannerWithBgTitleAndDescription from "../../components/BannerWithBgTitleAndDescription/BannerWithBgTitleAndDescription";
import "./project.scss";
import { useFetchProjectsData } from "../../utils/hooks";

const ProjectPage = () => {
    let { id } = useParams();
    const { storeProjects } = useDataStore();
    const [projectDetails, setProjectDetails] = useState();

    useFetchProjectsData();

    useEffect(() => {
        const existingProject = storeProjects.find((project) => project._id === id);
        if (existingProject) {
            setProjectDetails(existingProject);
        }
    }, [storeProjects, id, projectDetails]);

    const bannerDetails = {
        imgSrc: projectDetails ? urlForImage(projectDetails.projectThumbnail) : "",
        title: projectDetails && projectDetails.name,
    };

    return (
        <Layout title="Project">
            <BannerWithBgTitleAndDescription imgSrc={bannerDetails.imgSrc} title={bannerDetails.title} />

            <div className="container">
                <div className="spacer" style={{ height: "20px" }}></div>

                <section>
                    <LinkButtonWithIcon
                        path={ROUTES.PATHS.projects.path}
                        label={`Back to ${ROUTES.PATHS.projects.title}`}
                        icon={<BsFillArrowLeftSquareFill />}
                    />
                </section>

                <div className="spacer" style={{ height: "20px" }}></div>

                {projectDetails && (
                    <>
                        {projectDetails?.description && (
                            <section>
                                <h2>Description</h2>
                                <p>{projectDetails.description}</p>
                            </section>
                        )}

                        {projectDetails?.liveUrl && (
                            <section>
                                <LinkButtonWithIcon
                                    path={projectDetails.liveUrl}
                                    label={"See it Live"}
                                    icon={<FaExternalLinkAlt />}
                                    isIconOnLeftSide={false}
                                />
                            </section>
                        )}

                        {projectDetails?.versionedProjectLink.url && (
                            <section>
                                <LinkButtonWithIcon
                                    path={projectDetails.versionedProjectLink.url}
                                    label={`Check it on ${projectDetails.versionedProjectLink.platform.title}`}
                                    icon={<IoMdGitBranch />}
                                    isIconOnLeftSide={false}
                                />
                            </section>
                        )}

                        {projectDetails?.projectCaptures && (
                            <section>
                                <h2>App Captures</h2>
                                <div className="app-captures gallery">
                                    {projectDetails.projectCaptures.map((capture) => (
                                        <ModalImage
                                            className="item"
                                            small={urlForImage(capture)}
                                            large={urlForImage(capture)}
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </section>
                        )}
                    </>
                )}

                <div className="spacer" style={{ height: "20px" }}></div>
            </div>
        </Layout>
    );
};

export default ProjectPage;
