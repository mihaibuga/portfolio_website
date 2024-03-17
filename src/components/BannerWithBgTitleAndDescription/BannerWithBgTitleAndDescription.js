import React from "react";
import "./bannerWithBgTitleAndDescription.scss";

const BannerWithBgTitleAndDescription = ({imgSrc, title, subtitle = ''}) => {
    return (
        <div className="banner">
            <div className="bg-image-wrapper">
                <img src={imgSrc} alt="" />
            </div>

            <div className="inner-wrapper container">
                <div className="content-wrapper centered reduced">
                    <h1>{title}</h1>

                    {subtitle !== '' && <div className="subtitle">{subtitle}</div>}
                </div>
            </div>
        </div>
    );
};

export default BannerWithBgTitleAndDescription;
