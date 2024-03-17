import React from "react";
import "./backToButton.scss";
import { Link } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const BackToButton = ({ path, label }) => {
    return (
        <Link to={path} className="back-to-button">
            <BsFillArrowLeftSquareFill /><span>Back to {label}</span>
        </Link>
    );
};

export default BackToButton;
