import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import "./footer.scss";

const Footer = () => {
    const style = { height: 35, width: 35 };
    const icon_bg_color = "#f9feff";

    return (
        <footer>
            <div className="container">
                <div class="social-icons">
                    <SocialIcon url="mailto:johndoe@email.com" style={style} bgColor={icon_bg_color} />
                    <SocialIcon url="https://www.linkedin.com/" style={style} bgColor={icon_bg_color} />
                    <SocialIcon url="https://github.com/" style={style} bgColor={icon_bg_color} />
                </div>

                <div class="footer-brand-wrapper">
                    <NavLink className="footer-brand" to="/">
                        Portfolio Website
                    </NavLink>
                    <span className="copy">&copy; 2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
