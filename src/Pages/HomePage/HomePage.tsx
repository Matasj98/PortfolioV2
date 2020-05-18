import React from "react";
import { Box, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";

const useStyles = makeStyles({
    root: {
        minHeight: "91vh",
    },
    border: {
        borderBottom: "1px solid white",
    },
    borderIcon: {
        position: "absolute",
        top: "-15px",
        transform: "rotate(45deg)",
        backgroundColor: "#b03030",
        borderColor: "white",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
    },
});

const HomePage: React.FC = () => {
    const classes = useStyles();
    const smallSize = useMediaQuery(useTheme().breakpoints.up("sm"));
    return (
        <Box display='flex' alignItems='center' className={classes.root}>
            <Box width='80%' m='auto'>
                <Box mb='120px' m='auto' display='flex' justifyContent='flex-start'>
                    <Box borderLeft={smallSize ? 1 : 0}>
                        <Box ml={smallSize ? "50px" : "0px"}>
                            <Typography variant='h2'>
                                <Typist
                                    cursor={{
                                        hideWhenDone: true,
                                        hideWhenDoneDelay: 0,
                                    }}
                                >
                                    Hi,
                                    <br />
                                    I'm Matas
                                    <br />
                                </Typist>
                                <TypistLoop interval={500}>
                                    {["A Front - End Developer", "Software Engineering Student"].map((text) => (
                                        <Typist key={text}>{text}</Typist>
                                    ))}
                                </TypistLoop>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box position='relative' className={classes.border}>
                    <Box
                        className={classes.borderIcon}
                        m='auto'
                        // border={1}
                        width='30px'
                        height='30px'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
