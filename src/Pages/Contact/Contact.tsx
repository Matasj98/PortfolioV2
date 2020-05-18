import React from "react";
import { Box, Link, IconButton, Typography, makeStyles } from "@material-ui/core";
import linkedinPhoto from "../../Assets/icons/linkedin.svg";

const useStyles = makeStyles({
    root: {},
    iconButton: {
        overflow: "hidden",
        "&:hover": {
            backgroundColor: "rgba(176, 48, 48, 0.5)",
        },
    },
});

const Contact = () => {
    const classes = useStyles();
    return (
        <Box minHeight='85vh'>
            <Typography style={{ margin: "60px 0 10px 0" }} align='center' variant='h4'>
                Hey! I'm happy to see you decided to contact me.
            </Typography>
            <Typography align='center' variant='h5'>
                I believe you will find all the needed information to contact me on my linkedin profile:)
            </Typography>
            <Box height='400px' display='flex' justifyContent='center' alignItems='center'>
                <Link underline='none' href='https://www.linkedin.com/in/matas-jarilinas-565949184/'>
                    <IconButton size='medium' className={classes.iconButton}>
                        <Box height='100px' width='100px' display='flex' justifyContent='center' alignItems='center'>
                            <img alt='linkedin logo' height='80%' width='80%' src={linkedinPhoto} />
                        </Box>
                    </IconButton>
                </Link>
            </Box>
        </Box>
    );
};

export default Contact;
