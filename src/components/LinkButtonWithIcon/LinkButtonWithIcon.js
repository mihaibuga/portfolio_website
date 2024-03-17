import React from "react";
import "./linkButtonWithIcon.scss";
import { Link } from "react-router-dom";

const LinkButtonWithIcon = ({ path, label, icon, isIconOnLeftSide = true }) => {

    return (
        <Link to={path} className={`link-button-with-icon ${isIconOnLeftSide === false && 'right-aligned'}`}>
            {icon}<span>{label}</span>
        </Link>
    );
};

export default LinkButtonWithIcon;
