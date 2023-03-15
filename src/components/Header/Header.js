import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import "./header.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Portfolio Website
                </Link>
                <nav>
                    <Link className="nav-link" aria-current="page" to={ROUTES.LANDING}>
                        Home
                    </Link>
                    <Link className="nav-link" aria-current="page" to={ROUTES.PROJECTS}>
                        Projects
                    </Link>
                    <Link className="nav-link" aria-current="page" to={ROUTES.CONTACT}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
