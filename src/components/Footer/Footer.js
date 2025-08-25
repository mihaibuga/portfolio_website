import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import useDataStore from "../../store/dataStore";
import * as ROUTES from "../../routes/routes";

const Footer = () => {
    const { storeSiteSettings, storeProfileData } = useDataStore();
    const [isLoading, setIsLoading] = React.useState(true);
    const [portfolioTitle, setPortfolioTitle] = React.useState("Portfolio Website");
    const [email, setEmail] = React.useState();
    const [linkedInDetails, setLinkedinDetails] = React.useState();
    const [isLinkedInDeclared, setIsLinkedInDeclared] = React.useState(false);
    const [versionControlProfileUrl, setVersionControlProfileUrl] = React.useState();

    React.useEffect(() => {
        if (storeSiteSettings !== null) {
            setPortfolioTitle(storeSiteSettings.siteTitle);
        }

        if (storeProfileData !== null) {
            setEmail(storeProfileData.emailAddress);
            const isLinkedInStored = storeProfileData.socialLinks.some(
                (socialLink) => socialLink.platform.title.toLowerCase() === "linkedin"
            );
            setIsLinkedInDeclared(isLinkedInStored);
            setLinkedinDetails(
                isLinkedInStored &&
                    storeProfileData.socialLinks.find(
                        (socialLink) => socialLink.platform.title.toLowerCase() === "linkedin"
                    )
            );
            setVersionControlProfileUrl(storeProfileData.versionControlProfileUrl);
        }
        setIsLoading(false);
    }, []);

    return (
        <React.Fragment>
            <Divider />
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 0, sm: 4 },
                    py: { xs: 2, sm: 4 },
                    textAlign: { sm: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "flex", sm: "flex" },
                            flexDirection: "column",
                            gap: 1,
                            alignItems: { xs: "center", sm: "unset" },
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                            Menu
                        </Typography>
                        <Link color="text.secondary" variant="body2" underline="hover" href={ROUTES.PATHS.landing.path}>
                            {ROUTES.PATHS.landing.title}
                        </Link>
                        <Link color="text.secondary" variant="body2" underline="hover" href={ROUTES.PATHS.projects.path}>
                            {ROUTES.PATHS.projects.title}
                        </Link>
                        <Link color="text.secondary" variant="body2" underline="hover" href={ROUTES.PATHS.contact.path}>
                            {ROUTES.PATHS.contact.title}
                        </Link>
                        <Link color="text.secondary" variant="body2" underline="hover" href={ROUTES.PATHS.resume.path}>
                            {ROUTES.PATHS.resume.title}
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row" },
                        justifyContent: "space-between",
                        gap: { xs: 2, sm: 0 },
                        pt: { xs: 2, sm: 4 },
                        width: "100%",
                        alignItems: { xs: "center", sm: "unset" },
                        borderTop: { xs: "none", sm: "1px solid" },
                        borderColor: "divider",
                    }}
                >
                    <div>
                        <Typography variant="overline" sx={{ color: "text.secondary", mt: 1 }}>
                            {"Copyright © "}
                            <Link color="text.secondary" underline="hover" href={ROUTES.PATHS.landing.path}>
                                {portfolioTitle}
                            </Link>
                            &nbsp;
                            {new Date().getFullYear()}
                        </Typography>
                    </div>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{ justifyContent: "left", color: "text.secondary" }}
                    >
                        <IconButton
                            color="inherit"
                            size="small"
                            href={`mailto:${email}`}
                            aria-label="X"
                            sx={{ alignSelf: "center" }}
                        >
                            <EmailIcon />
                        </IconButton>
                        {isLoading === false && (
                            <IconButton
                                color="inherit"
                                size="small"
                                href={linkedInDetails?.url}
                                aria-label="GitHub"
                                sx={{ alignSelf: "center" }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        )}
                        {versionControlProfileUrl && (
                            <IconButton
                                color="inherit"
                                size="small"
                                href={versionControlProfileUrl.url}
                                aria-label="LinkedIn"
                                sx={{ alignSelf: "center" }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        )}
                    </Stack>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default Footer;