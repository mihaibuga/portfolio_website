import { Link } from "react-router-dom";
import { FaCss3Alt, FaGitAlt, FaGithubSquare, FaHtml5, FaPython, FaReact, FaPhp, FaFigma } from "react-icons/fa";
import { SiJavascript, SiCsharp } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

import Layout from "../../layouts/Layout";
import "./home.scss";
import * as ROUTES from "../../routes/routes";
import useDataStore from "../../store/dataStore";
import { useEffect, useState } from "react";
import BannerWithBgTitleAndDescription from "../../components/BannerWithBgTitleAndDescription/BannerWithBgTitleAndDescription";

const Home = () => {
    const { storeProfileData } = useDataStore();
    const [fName, setFName] = useState();

    const banner_image_src =
        "https://images.unsplash.com/photo-1543751416-705d3e34d02a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3600";
    const bannerDetails = {
        imgSrc: banner_image_src,
        title: <><span>Welcome!</span> {fName && (<span>I'm {fName}.</span>)}</>,
        subtitle: <p>Glad for the visit!</p>
    }

    useEffect(() => {
        if (storeProfileData !== null) {
            setFName(storeProfileData.firstName);
        }
    }, [storeProfileData]);

    return (
        <Layout title="Home">
            <BannerWithBgTitleAndDescription imgSrc={bannerDetails.imgSrc} title={bannerDetails.title} subtitle={bannerDetails.subtitle} />

            <div className="spacer" style={{ height: "20px" }}></div>

            <section className="container spaced-elements rows gap-20">
                <div className="card">
                    <div className="content-wrapper centered reduced">
                        <h2>
                            Starting my coding journey in 2021 with <a href="https://codecool.com/ro/">Codecool</a>,
                            I've since had hands-on experience with multiple technologies.
                        </h2>
                        <h2>
                            My attention goes toward Front-End and I'm looking to develop more web applications where I
                            can put my skills to test.
                        </h2>
                    </div>
                </div>
            </section>

            <div className="spacer" style={{ height: "20px" }}></div>

            <section className="callout">
                <div className="container">
                    <h2>Interested in staying in touch?</h2>
                    <Link className="cta" to={ROUTES.PATHS.contact.path}>
                        Go to {ROUTES.PATHS.contact.title}
                    </Link>
                </div>
            </section>

            <div className="spacer" style={{ height: "20px" }}></div>

            <section className="container spaced-elements columns gap-20 two-even-cols">
                <div className="card column">
                    <div className="content-wrapper centered">
                        <h2>I've worked on some cool projects, both in a team and individually too.</h2>
                        <h2>Want to check them out?</h2>

                        <div className="spacer" style={{ height: "20px" }}></div>

                        <Link className="cta" to={ROUTES.PATHS.projects.path}>
                            Go to {ROUTES.PATHS.projects.title}
                        </Link>
                    </div>
                </div>

                <div className="card column">
                    <div className="content-wrapper centered reduced">
                        <h2>Some of the Languages and Tools I'm familiar with:</h2>

                        <div className="icons-wrapper">
                            <FaHtml5 alt="HTML" title="HTML" color="F06529" />
                            <FaCss3Alt alt="CSS" title="CSS" color="264de4" />
                            <SiJavascript alt="JS" title="JS" color="f0db4f" />
                            <FaReact alt="React" title="React" color="61dafb" />
                            <SiCsharp alt="C Sharp" title="C Sharp" color="512bd4" />
                            <FaPython alt="Python" title="Python" color="4584B6" />
                            <FaPhp alt="PHP" title="PHP" color="777BB3" />
                        </div>

                        <h2>Dev Tools:</h2>
                        <div className="icons-wrapper">
                            <FaGitAlt alt="Git" title="Git" color="f34f29" />
                            <FaGithubSquare alt="GitHub" title="GitHub" color="4078c0" />
                            <TbBrandVscode alt="VSCode" title="VSCode" color="0078d7" />
                            <FaFigma alt="Figma" title="Figma" color="f24e1e" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="spacer" style={{ height: "20px" }}></div>
        </Layout>
    );
};

export default Home;
