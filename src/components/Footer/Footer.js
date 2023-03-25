import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./footer.scss";

const Footer = () => {
    const style = { height: 35, width: 35 };
    const icon_bg_color = "#f9feff";

    return (
        <footer>
            <div className="container">
                <div className="social-icons">
                    <SocialIcon url={process.env.REACT_APP_EMAIL} style={style} bgColor={icon_bg_color} />
                    <SocialIcon url={process.env.REACT_APP_LINKEDIN} style={style} bgColor={icon_bg_color} />
                    <SocialIcon url={process.env.REACT_APP_GITHUB} style={style} bgColor={icon_bg_color} />
                </div>

                <div className="footer-brand-wrapper">
                    <NavLink className="footer-brand" to="/">
                        {process.env.REACT_APP_BRAND_NAME}
                    </NavLink>
                    <span className="copy">&copy; {process.env.REACT_APP_YEAR}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
