import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./footer.scss";
import useDataStore from "../../store/dataStore";
import * as ROUTES from "../../routes/routes";
import { getYearFromDate } from "../../utils/helpers";

const Footer = () => {
    const { storeSiteSettings, storeProfileData } = useDataStore();
    const [portfolioTitle, setPortfolioTitle] = useState("Portfolio Website");
    const [copyrightYear, setCopyrightYear] = useState("Portfolio Website");
    const [email, setEmail] = useState();
    const [linkedInDetails, setLinkedinDetails] = useState();
    const [isLinkedInDeclared, setIsLinkedInDeclared] = useState(false);
    const [versionControlProfileUrl, setVersionControlProfileUrl] = useState();

    useEffect(() => {
        if (storeSiteSettings !== null) {
            setPortfolioTitle(storeSiteSettings.siteTitle);
            setCopyrightYear(getYearFromDate(storeSiteSettings.copyrightYear));
        }

        if (storeProfileData !== null) {
            setEmail(storeProfileData.emailAddress);
            setIsLinkedInDeclared(
                storeProfileData.socialLinks.some(
                    (socialLink) => socialLink.platform.title.toLowerCase() === "linkedin"
                )
            );
            setLinkedinDetails(
                isLinkedInDeclared &&
                    storeProfileData.socialLinks.find(
                        (socialLink) => socialLink.platform.title.toLowerCase() === "linkedin"
                    )
            );
            setVersionControlProfileUrl(storeProfileData.versionControlProfileUrl);
        }
    }, [storeSiteSettings, storeProfileData]);

    const style = { height: 35, width: 35 };
    const icon_bg_color = "#f9feff";

    return (
        <footer>
            <div className="container">
                <div className="social-icons">
                    <SocialIcon url={`mailto:${email}`} style={style} bgColor={icon_bg_color} />
                    {isLinkedInDeclared && (
                        <SocialIcon url={linkedInDetails.url} style={style} bgColor={icon_bg_color} />
                    )}
                    {versionControlProfileUrl &&
                        <SocialIcon url={versionControlProfileUrl.url} style={style} bgColor={icon_bg_color} />
                    }
                </div>

                <div className="footer-brand-wrapper">
                    <span className="copy">&copy; {copyrightYear}</span>
                    <NavLink className="footer-brand" to={ROUTES.PATHS.landing.path}>
                        {portfolioTitle}
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
