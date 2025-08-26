import { createTheme } from "@mui/material/styles";

export const setupTheme = () => {
    const palette = {
        primary: {
            main: "#38342e",
            light: "#8f8c80",
            // dark: "#323232"
        },
        secondary: {
            main: "#c5aa6a",
            dark: "#7c5c11",
        },
    };

    return createTheme({ palette });
};
