import React from "react";
import {Box, makeStyles, Typography} from "@material-ui/core";
import landingImage from "../../Assets/landingPage.jpg";

const useStyles = makeStyles({
    root: {
        height: "100vh",
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url(${landingImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
    },
    border: {borderBottom: "1px solid white"},
    borderIcon: {
        position: "absolute",
        right: "50%",
        top: "-15px",
        transform: "rotate(45deg)",
        backgroundColor: "#b03030",
        borderColor: "white",
    },
});

const HomePage: React.FC = () => {
    const classes = useStyles();
    return (
        <Box display="flex" alignItems="center" className={classes.root}>
            <Box width="80%" m="auto">

                <Box mb="120px" m="auto" display="flex" justifyContent="center">
                    <Box borderLeft={2} p='0 50px'>
                        <Typography variant="h2">Hi,</Typography>
                        <Typography variant="h2">I'm Matas</Typography>
                        <Typography variant="h2">A Front - End Developer</Typography>
                    </Box>
                </Box>

                <Box position="relative" className={classes.border}>
                    <Box
                        className={classes.borderIcon}
                        m="auto"
                        border={1}
                        width="30px"
                        height="30px"
                    >hello test homepage</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
