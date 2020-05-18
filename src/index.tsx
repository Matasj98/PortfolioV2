import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
	MuiThemeProvider,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Sen", sans-serif',
	},
});

ReactDOM.render(
	<BrowserRouter>
		<MuiThemeProvider theme={responsiveFontSizes(theme)}>
			<App />
		</MuiThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
