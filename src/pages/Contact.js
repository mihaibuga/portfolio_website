/* eslint-disable jsx-a11y/img-redundant-alt */
import Layout from "../layouts/Layout";
import "../assets/styles/contact.scss";

import mailIcon from "../assets/images/vectors/mail-icon.jpg";
import linkedIn from "../assets/images/vectors/linkedin-logo.jpg";

import * as DETAILS from "../data/details";

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
                                <img alt="Profile picture" src={DETAILS.PROFILE_SRC} />
                            </div>
                        </div>
                        <div className="right contact-details">
                            <div className="icon-label-link">
                                <a href={`mailto:${DETAILS.EMAIL}`}>
                                    <div className="inner-container">
                                        <div className="left">
                                            <div className="icon-wrapper">
                                                <img alt="Mail icon" src={mailIcon} />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="label">Email</div>
                                            <div className="link">{DETAILS.EMAIL}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="icon-label-link">
                                <a href={DETAILS.LINKEDIN}>
                                    <div className="inner-container">
                                        <div className="left">
                                            <div className="icon-wrapper">
                                                <img alt="LinkedIn Logo" src={linkedIn} />
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="label">LinkedIn</div>
                                            <div className="link">{DETAILS.FNAME + " " + DETAILS.LNAME}</div>
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
