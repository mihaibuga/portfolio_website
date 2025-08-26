import { useEffect } from "react";

import { Container } from "@mui/material";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = ({ title, children, hasTopBanner }) => {
    const titleSuffix = " | Portfolio Website";

    useEffect(() => {
        document.title = `${title}${titleSuffix}`;
    }, [title]);

    return (
        <>
            <Header />
            <Container
                component="main"
                maxWidth={false}
                disableGutters
                sx={{ display: "flex", flexDirection: "column", width: "100%", mt: hasTopBanner ? 0 : 16, gap: "20px", pb: "20px" }}
            >
                {children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;
