import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import landingImage from "./Assets/landingPage.jpg";
import Particles from "./Components/Particles/Particles";

const useStyles = makeStyles({
    root: {
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
    },
});

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Particles />
            <NavBar />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </Box>
    );
};

export default App;
