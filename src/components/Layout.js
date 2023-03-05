import { useEffect } from "react";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

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
