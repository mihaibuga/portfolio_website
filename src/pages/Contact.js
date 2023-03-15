/* eslint-disable jsx-a11y/img-redundant-alt */
import Layout from "../components/Layout";
import "./contact.scss";

import profileImage from "../images/profile-image.png";
import mailIcon from "../images/vectors/mail-icon.jpg";
import linkedIn from "../images/vectors/linkedin-logo.jpg";

const Contact = () => {
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
                                <img
                                    alt="Profile picture"
                                    src={profileImage}
                                />
                            </div>
                        </div>
                        <div className="right contact-details">
                            <div className="icon-label-link">
                                <a href="mailto:johndoe@email.com">
                                    <div className="inner-container">
                                        <div className="left">
                                            <div className="icon-wrapper">
                                                <img alt="Mail icon" src={mailIcon} />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="label">Email</div>
                                            <div className="link">johndoe@email.com</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="icon-label-link">
                                <a href="https://www.linkedin.com/">
                                    <div className="inner-container">
                                        <div className="left">
                                            <div className="icon-wrapper">
                                                <img alt="LinkedIn Logo" src={linkedIn} />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="label">LinkedIn</div>
                                            <div className="link">John Doe</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
