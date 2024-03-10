/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Layout from "../../layouts/Layout";
import useDataStore from "../../store/dataStore";
import "./contact.scss";
import { urlForImage } from "../../utils/sanityImage";

const Contact = () => {
    const { storeProfileData } = useDataStore();
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
            setIsLinkedInDeclared(
                socialLinks.some((socialLink) => socialLink.platform.title.toLowerCase() === "linkedin")
            );
            setLinkedinDetails(
                isLinkedInDeclared &&
                    socialLinks.find((socialLink) => socialLink.platform.title.toLowerCase() === "linkedin")
            );
        }
    }, [storeProfileData]);

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
                                <img alt="Profile picture" src={profileImg} />
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
                            {isLinkedInDeclared && (
                                <div className="icon-label-link">
                                    <a href={linkedInDetails.url}>
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
