import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./footer.scss";
import * as DETAILS from '../../constants/details';

const Footer = () => {
    const style = { height: 35, width: 35 };
    const icon_bg_color = "#f9feff";

    return (
        <footer>
            <div className="container">
                <div className="social-icons">
                    <SocialIcon url={`mailto:${DETAILS.EMAIL}`} style={style} bgColor={icon_bg_color} />
                    <SocialIcon url={DETAILS.LINKEDIN} style={style} bgColor={icon_bg_color} />
                    <SocialIcon url={DETAILS.GITHUB} style={style} bgColor={icon_bg_color} />
                </div>

                <div className="footer-brand-wrapper">
                    <NavLink className="footer-brand" to="/">
                        {DETAILS.BRAND_NAME}
                    </NavLink>
                    <span className="copy">&copy; {DETAILS.YEAR}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
