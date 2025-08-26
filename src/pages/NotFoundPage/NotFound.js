import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "./not-found.scss";
import * as ROUTES from "../../routes/routes";

const NotFound = () => {
    return (
        <Layout title="Page Not Found">
            <section className="container not-found">
                <div className="content-wrapper centered reduced">
                    <h1>404</h1>
                    <h2>The page you are looking for does not exist.</h2>
                    <div className="spacer" style={{ height: "20px" }}></div>
                    <Link className="cta" to={ROUTES.PATHS.landing.path}>
                        Go back to the homepage
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default NotFound;
