import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as ROUTES from "../../routes/routes";
import useDataStore from "../../store/dataStore";
import "./header.scss";

const Header = () => {
    const { storeSiteSettings } = useDataStore();
    const [showMenu, setShowMenu] = useState(false);
    const [portfolioTitle, setPortfolioTitle] = useState("Portfolio Website");

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

    useEffect(() => {
        if (storeSiteSettings !== null) {
            setPortfolioTitle(storeSiteSettings.siteTitle);
        }
    }, [storeSiteSettings]);

    return (
        <header>
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    {portfolioTitle}
                </NavLink>

                <button className={`menu-toggle${showMenu ? " toggled" : ""}`} onClick={handleNavbarToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-elements${showMenu ? " active" : ""}`}>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.landing.path}>
                        {ROUTES.PATHS.landing.title}
                    </NavLink>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.projects.path}>
                        {ROUTES.PATHS.projects.title}
                    </NavLink>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.contact.path}>
                        {ROUTES.PATHS.contact.title}
                    </NavLink>
                    <NavLink className="nav-link" aria-current="page" to={ROUTES.PATHS.resume.path}>
                        {ROUTES.PATHS.resume.title}
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
