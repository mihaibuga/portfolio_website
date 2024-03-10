import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import Layout from "../../layouts/Layout";
import ResumeWithOptions from "../../components/ResumeWithOptions/ResumeWithOptions";
import useDataStore from "../../store/dataStore";
import * as ROUTES from "../../routes/routes";
import "./resume.scss";

const Resume = () => {
    const { storeProfileData } = useDataStore();
    const [isLoading, setIsLoading] = useState(true);
    const [resume, setResume] = useState();

    const downloadHandler = (event) => {
        event.preventDefault();
        window.open(resume);
    };

    useEffect(() => {
        if (storeProfileData !== null && storeProfileData.resumes) {
            setResume(storeProfileData?.resumes[0].resumeFileUrl);
            setIsLoading(false);
        }
    }, [storeProfileData]);

    return (
        <Layout title="Resume">
            <div className="container">
                <div className="inner-wrapper">
                    <h1>My Resume</h1>

                    <div className="spacer" style={{ height: "20px" }} />

                    {isLoading ? (
                        <AiOutlineLoading className="loading-icon" />
                    ) : resume ? (
                        <>
                            <button
                                className="resume-download-button"
                                onClick={(event) => {
                                    downloadHandler(event);
                                }}
                            >
                                <FaDownload /> Download
                            </button>

                            <div className="spacer" style={{ height: "20px" }} />

                            <div className="resume-wrapper">
                                <ResumeWithOptions pdf={resume} />
                            </div>
                        </>
                    ) : (
                        <div>
                            No resumes here...but you can{" "}
                            <Link to={ROUTES.PATHS.contact.url} style={{ textDecoration: "underline" }}>
                                contact
                            </Link>{" "}
                            me! Let's connect!
                        </div>
                    )}
                    <div className="spacer" style={{ height: "20px" }} />
                </div>
            </div>
        </Layout>
    );
};

export default Resume;
