import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';

import "./index.scss";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Routes>
            <Route exact path={ROUTES.LANDING} element={<Home />}></Route>
            <Route exact path={ROUTES.PROJECTS} element={<Projects />}></Route>
            <Route exact path={ROUTES.CONTACT} element={<Contact />}></Route>
            <Route path={ROUTES.ANY} element={<NotFound />}></Route>
        </Routes>
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
