import "./footer.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <span className="navbar-text">&copy; {year}</span>
            </div>
        </footer>
    );
};

export default Footer;
