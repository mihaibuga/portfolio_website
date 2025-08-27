import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { router } from "./routes/routes";
import "./assets/styles/index.scss";
import { setupTheme } from "./themes/MyTheme/MyTheme";

const container = document.getElementById("root");
const root = createRoot(container);
const theme = setupTheme();

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
