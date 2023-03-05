import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);

    return <main className="container">This is now the homepage</main>;
};

export default Home;
