import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import { alpha, styled } from "@mui/material/styles";

import { AppBar, Box, Container, Drawer, IconButton, Tab, Tabs, Toolbar } from "@mui/material";

import { CloseRounded as CloseRoundedIcon, Menu as MenuIcon } from "@mui/icons-material";

import useDataStore from "../../store/dataStore";
import * as ROUTES from "../../routes/routes";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
    borderRadius: "16px",
    backdropFilter: "blur(24px)",
    border: "1px solid",
    borderColor: alpha(theme.palette.primary.light, 0.2),
    backgroundColor: `rgb(from ${theme.palette.primary.dark} r g b / 0.6)`,
    boxShadow: 0,
    padding: "8px 12px",
}));

const isSamePageLinkNavigation = (event) => {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
};

const TabItem = React.forwardRef((props, ref) => {
    return (
        <Tab
            ref={ref}
            component={NavLink}
            aria-current={props.selected && "page"}
            sx={(theme) => ({
                backgroundColor: { xs: `transparent`, md: `rgb(from ${theme.palette.primary.main} r g b / 0.6)` },
                borderRadius: "6px",
                color: theme.palette.primary.light,
                cursor: "pointer",
                flexGrow: 1,
                transition: "all 0.5s",
                fontSize: "14px",
                fontWeight: "600",
                [theme.breakpoints.down("md")]: {
                    borderRadius: "0 6px 6px 0",
                    fontSize: "18px",
                    width: "100%",
                },
                "&.Mui-selected, &:hover": {
                    color: `rgb(from ${theme.palette.primary.dark} r g b / 0.8)`,
                    backgroundColor: `rgb(from ${theme.palette.secondary.main} r g b / 0.6)`,
                    backdropFilter: "blur(16px)",
                },
            })}
            {...props}
        />
    );
});

TabItem.propTypes = {
    selected: PropTypes.bool,
};

const Header = () => {
    const { pathname } = useLocation();
    const { storeSiteSettings } = useDataStore();
    const [isLoading, setIsLoading] = React.useState(true);
    const [showMenu, setShowMenu] = React.useState(false);
    const [portfolioTitle, setPortfolioTitle] = React.useState("Portfolio");
    const [currentTab, setCurrentTab] = React.useState(false);

    const handleNavbarToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleNavDisplayOnResize = () => {
        setShowMenu(false);
    };

    React.useEffect(() => {
        const routePaths = Object.keys(ROUTES.PATHS).map((key) => ROUTES.PATHS[key].path);

        if (pathname === "/") {
            setCurrentTab("/");
        } else {
            const validPath = routePaths.find((substring) => substring !== "/" && pathname.startsWith(substring));
            if (validPath) {
                setCurrentTab(validPath);
            }
        }

        setIsLoading(false);
    }, [pathname]);

    React.useEffect(() => {
        window.addEventListener("resize", handleNavDisplayOnResize);
        return () => {
            window.removeEventListener("resize", handleNavDisplayOnResize);
        };
    }, []);

    React.useEffect(() => {
        if (storeSiteSettings !== null) {
            setPortfolioTitle(storeSiteSettings.siteTitle);
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [storeSiteSettings]);

    const handleChange = (event, newValue) => {
        if (event.type !== "click" || (event.type === "click" && isSamePageLinkNavigation(event))) {
            setCurrentTab(newValue);
        }
    };

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: "transparent",
                backgroundImage: "none",
                mt: "28px",
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    {/* Desktop Navbar Menu */}
                    <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center", px: 0 }}>
                        {!isLoading && (
                            <Box
                                sx={{
                                    p: 2,
                                    textTransform: "capitalize",
                                    fontSize: 18,
                                    fontWeight: "500",
                                    letterSpacing: 2,
                                }}
                            >
                                <NavLink sx={{ width: 1 }} to="/">
                                    {portfolioTitle}
                                </NavLink>
                            </Box>
                        )}

                        <Tabs
                            value={currentTab}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="nav tabs"
                            role="navigation"
                            sx={(theme) => ({
                                borderRadius: "6px",
                                backgroundColor: {
                                    xs: `transparent`,
                                    md: `rgb(from ${theme.palette.primary.light} r g b / 0.4)`,
                                },
                                display: "flex",
                                p: "2px",
                                [theme.breakpoints.down("md")]: {
                                    display: "none",
                                },
                                "& .MuiTabs-flexContainer": {
                                    gap: 1,
                                },
                            })}
                        >
                            {Object.keys(ROUTES.PATHS).map((navPath) => (
                                <TabItem
                                    key={`ds-nav-path-${ROUTES.PATHS[navPath].path}`}
                                    label={ROUTES.PATHS[navPath].title}
                                    to={ROUTES.PATHS[navPath].path}
                                    value={ROUTES.PATHS[navPath].path}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    {/* Mobile Navbar Menu */}
                    <Box sx={{ display: { xs: "flex", md: "none" }, gap: 1 }}>
                        <IconButton
                            sx={(theme) => ({
                                width: "40px",
                                height: "32px",
                                borderRadius: "6px",
                                color: theme.palette.primary.main,
                                "&:hover": {},
                            })}
                            aria-label="Menu button"
                            onClick={handleNavbarToggle}
                        >
                            <MenuIcon
                                sx={(theme) => ({
                                    width: "inherit",
                                    height: "unset",
                                })}
                            />
                        </IconButton>
                        <Drawer anchor="top" open={showMenu} onClose={handleNavbarToggle}>
                            <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    <IconButton onClick={handleNavbarToggle}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>

                                <Tabs
                                    value={currentTab}
                                    onChange={handleChange}
                                    textColor="secondary"
                                    indicatorColor="secondary"
                                    aria-label="nav tabs"
                                    role="navigation"
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        "& .MuiTabs-flexContainer": {
                                            gap: 4,
                                        },
                                        "& .MuiTabs-indicator": {
                                            left: 0,
                                        },
                                    }}
                                    orientation="vertical"
                                    variant="fullWidth"
                                >
                                    {Object.keys(ROUTES.PATHS).map((navPath) => (
                                        <TabItem
                                            key={`mb-nav-path-${ROUTES.PATHS[navPath].path}`}
                                            label={ROUTES.PATHS[navPath].title}
                                            to={ROUTES.PATHS[navPath].path}
                                            value={ROUTES.PATHS[navPath].path}
                                        />
                                    ))}
                                </Tabs>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
