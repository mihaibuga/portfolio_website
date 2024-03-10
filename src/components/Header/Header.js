import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../routes/routes";
import * as DETAILS from "../../data/details";

import "./header.scss";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleNavbarToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleNavDisplayOnResize = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        window.addEventListener("resize", handleNavDisplayOnResize);
        return () => {
            window.removeEventListener("resize", handleNavDisplayOnResize);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    {DETAILS.BRAND_NAME}
                </NavLink>

                <button className={`menu-toggle${showMenu ? " toggled" : ""}`} onClick={handleNavbarToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-elements${showMenu ? " active" : ""}`}>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.landing.path}>
                        Home
                    </NavLink>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.projects.path}>
                        Projects
                    </NavLink>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.contact.path}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
