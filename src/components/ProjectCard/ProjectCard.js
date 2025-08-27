import React from "react";
import { NavLink } from "react-router-dom";
import "./projectCard.scss";
import { urlForImage } from "../../utils/sanityImage";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import * as ROUTES from "../../routes/routes";

const ProjectCard = ({ projectDetails }) => {
    const { _id, name, projectThumbnail } = projectDetails;
    const [show, setShow] = React.useState(false);

    const GRID_STYLES = {
        borderRadius: 4,
        width: "100%",
        boxShadow: "1px 1px 30px 1px rgba(34,31,32,.1)",
        transition: "all 0.5s",
        // p: 2
    };

    const CARD_STYLES = {
        height: "100%",
    };

    const CARD_MEDIA_STYLES = {
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: show ? "scale3d(1.02, 1.02, 1)" : "none", backdropFilter: "blur(16px)" },
    };

    return (
        <Grid
            item
            size={{ xs: 1, sm: 1, md: 5, lg: 5 }}
            sx={GRID_STYLES}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
        >
            <Card sx={CARD_STYLES}>
                <CardActionArea component={NavLink} to={`${ROUTES.PATHS.projects.path}/${_id}`}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" sx={{ fontWeight: "bold" }} component="div">
                            {name}
                        </Typography>
                    </CardContent>
                    <CardMedia component="img" image={urlForImage(projectThumbnail)} sx={CARD_MEDIA_STYLES} />
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ProjectCard;
