import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.scss";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/projects" element={<Projects />}></Route>
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
