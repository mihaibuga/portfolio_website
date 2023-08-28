import { useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ title, children }) => {
    const titleSuffix = " | Portfolio Website";

    useEffect(() => {
        document.title = `${title}${titleSuffix}`;
    }, [title]);

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
