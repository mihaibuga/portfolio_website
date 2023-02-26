import React, { StrictMode } from "react";
import { render } from "react-dom";

import "./index.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
