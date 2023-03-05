import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Layout>
        </>
    );
};

render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
    document.getElementById("root")
);
