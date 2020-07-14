import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { HashRouter } from "react-router-dom";

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Sen", sans-serif',
    },
});

ReactDOM.render(
    <HashRouter>
        <MuiThemeProvider theme={responsiveFontSizes(theme)}>
            <App />
        </MuiThemeProvider>
    </HashRouter>,
    document.getElementById("root")
);
