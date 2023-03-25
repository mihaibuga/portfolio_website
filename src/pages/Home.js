import Layout from "../components/Layout";
import "./home.scss";

const Home = () => {
    const banner_image_src =
        "https://images.unsplash.com/photo-1543751416-705d3e34d02a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=3600";
    return (
        <Layout title="Home">
            <div class="home-banner">
                <div class="bg-image-wrapper">
                    <img src={banner_image_src} alt="" />
                </div>
                <div class="inner-wrapper container">
                    <div className="content-wrapper">
                        <h1><span>Welcome!</span> <span>I'm John.</span></h1>
                        <div class="subtitle">
                            <p>Glad for the visit!</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
