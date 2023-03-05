import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Portfolio Website
                </Link>
                <nav>
                    <Link className="nav-link" aria-current="page" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" aria-current="page" to="/projects">
                        Projects
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
