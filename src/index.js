import React from "react";
import { render } from "react-dom";
import { RouterProvider } from 'react-router-dom';
import {router} from "./routes/routes";

import "./assets/styles/index.scss";

render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("root")
);
