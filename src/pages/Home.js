import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div className="container">
            <h1>Homepage</h1>
        </div>
    );
};

export default Home;
