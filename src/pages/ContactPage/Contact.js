/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import Layout from "../../layouts/Layout";
import useDataStore from "../../store/dataStore";
import "./contact.scss";
import { urlForImage } from "../../utils/sanityImage";
import profileSilhouette from "../../assets/images/Profile/profile-silhouette.png";

const Contact = () => {
    const { storeProfileData } = useDataStore();
    const [isLoading, setIsLoading] = useState(true);
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [profileImg, setProfileImg] = useState();
    const [linkedInDetails, setLinkedinDetails] = useState();
    const [isLinkedInDeclared, setIsLinkedInDeclared] = useState(false);

    useEffect(() => {
        if (storeProfileData !== null) {
            const { firstName, lastName, emailAddress, profileImage, socialLinks } = storeProfileData;
            setFName(firstName);
            setLName(lastName);
            setEmail(emailAddress);
            setProfileImg(urlForImage(profileImage));
            const isLinkedInStored = socialLinks.some(
                (socialLink) => socialLink.platform.title.toLowerCase() === "linkedin"
            );
            setIsLinkedInDeclared(isLinkedInStored);
            setLinkedinDetails(
                isLinkedInStored &&
                    socialLinks.find((socialLink) => socialLink.platform.title.toLowerCase() === "linkedin")
            );
        }
        setIsLoading(false);
    }, [storeProfileData, isLinkedInDeclared]);

    return (
        <Layout title="Contact">
            <div className="container">
                <div className="contact-card">
                    <div className="top">
                        <h2>Contact information</h2>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="image-wrapper">
                                {isLoading ? (
                                    <AiOutlineLoading className="loading-icon" />
                                ) : profileImg ? (
                                    <img alt="Profile picture" src={profileImg} />
                                ) : (
                                    <img alt="Profile picture" src={profileSilhouette} />
                                )}
                            </div>
                        </div>

                        <div className="right contact-details">
                            <div className="icon-label-link">
                                <a href={`mailto:${email}`}>
                                    <div className="inner-container">
                                        <div className="left">
                                            <div className="icon-wrapper">
                                                <FaEnvelope />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="label">Email</div>
                                            <div className="link">{email}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {isLoading === false && isLinkedInDeclared && (
                                <div className="icon-label-link">
                                    <a href={linkedInDetails?.url}>
                                        <div className="inner-container">
                                            <div className="left">
                                                <div className="icon-wrapper">
                                                    <FaLinkedin />
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="label">LinkedIn</div>
                                                <div className="link">{fName + " " + lName}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
