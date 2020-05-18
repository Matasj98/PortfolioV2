import React from "react";
import {
    Box,
    Grid,
    Divider,
    makeStyles,
    useMediaQuery,
    useTheme,
    Typography,
    Tooltip,
    IconButton,
    Avatar,
    withStyles,
} from "@material-ui/core";
import PictureOfMe from "../../Assets/MyPicCroped.jpg";
import { skillIcons } from "../../skillIcons";

const useStyles = makeStyles({
    root: {
        minHeight: "91vh",
        width: "100%",
    },
    divider: {
        padding: "1px",
        margin: "0 5px",
        backgroundColor: "white",
        borderRadius: "50px",
    },
    gridItem: {
        margin: "0 10px",
    },
    aboutMeNamings: {
        color: "#b03030",
    },
    ulList: {
        margin: 0,
    },
    listText: {
        textAlign: "justify",
    },
    skillImage: {
        "&:hover": {
            transition: "5s all",
            transform: "rotate(360deg)",
        },
    },
});

const IconButtonStyled = withStyles({
    root: {
        overflow: "hidden",
        "&:hover": {
            backgroundColor: "rgba(176, 48, 48, 0.5)",
        },
    },
})(IconButton);

const AvatarStyled = withStyles({
    root: {
        height: "80px",
        width: "80px",
    },
})(Avatar);

const About: React.FC = () => {
    const classes = useStyles();
    const displayDivider = useMediaQuery(useTheme().breakpoints.up("md"));

    const AboutSection = () => {
        return (
            <Box>
                <Box display='flex' justifyContent='center'>
                    <AvatarStyled alt='Matas Photo' src={PictureOfMe} />
                </Box>
                <Typography variant='h4' align='center'>
                    About me
                </Typography>
                <Box height='100%' mt='15px'>
                    <Typography className={classes.aboutMeNamings} variant='h6' style={{ display: "inline-block" }}>
                        <li>Full Name:&nbsp;</li>
                    </Typography>
                    <Typography variant='body2' style={{ display: "inline-block" }}>
                        Matas Jarilinas
                    </Typography>
                    <Typography variant='h6' className={classes.aboutMeNamings}>
                        <li>Education:</li>
                    </Typography>
                    <ul className={classes.ulList}>
                        <Typography variant='body2'>
                            <li>Vilnius Gediminas Technical University (3rd year student)</li>
                            <li>Udemy Online Courses</li>
                        </Typography>
                    </ul>
                    <Typography variant='h6' className={classes.aboutMeNamings}>
                        <li>Experience:</li>
                    </Typography>
                    <ul className={classes.ulList}>
                        <Typography variant='body2'>
                            <li className={classes.listText}>
                                NFQ Academy - one of the most popular IT academies in Lithuania. I was attending as a
                                Front - End Developer on this academy for 3 months with focus on React.js and it's
                                related technologies/frameworks. During this period I gained knowledge about Front/Back
                                - End developing process. I worked on a project with my collegues - they were Back - End
                                Developers and then there was me who was responsible for Front - End alone. It was a
                                rough 3 month learning and developing journey, but I learned to work with a team, manage
                                develop a project dealing with stress, because I had other responsibilities besides
                                academy and of course most importantly I improved my knowledge working with famous
                                JavaScript framework - React.js.
                            </li>
                        </Typography>
                    </ul>
                    <Typography className={classes.aboutMeNamings} variant='h6'>
                        <li>More about me:</li>
                    </Typography>
                    <ul className={classes.ulList}>
                        <Typography variant='body2'>
                            <li className={classes.listText}>
                                I'm always excited to make something new - especially create a website. It's been a long
                                time since I decided to become a programmer and It's over than a year since I decided to
                                become a Front - End Developer. Why Front - End you may ask? It's not a difficult
                                question and there is a simple answer - I just love it, to create something new, solve
                                problems and most importantly see the results in the web browser as a beautiful website.
                            </li>
                            <li className={classes.listText}>
                                It's easy to tell people what you can do, but it's just a words, It's harder to actually
                                do it. Im trying to improve my knowledge and skills simply just by creating something
                                and when I start something else I do it better, because I learn from my mistakes and
                                gain knowledge by searching for information. Check out my projects to see what I can do
                                now and if interested contact me to see what I can do in the future.
                            </li>
                            <li className={classes.listText}>
                                People can't be perfect in all areas covering programming, but they can master one thing
                                perfectly. That's why I'm focusing on Front - End Development, because there is so much
                                to learn for me. Don't get me wrong I have some experience in Back - End Development,
                                but It's more like doing some simple tasks. But still - that's something!.
                            </li>
                        </Typography>
                    </ul>
                </Box>
            </Box>
        );
    };
    const SkillSection = () => {
        return (
            <Box>
                {skillIcons.map((item, index) => {
                    return (
                        <Box key={index}>
                            <Typography variant='h4' align='center'>
                                {item.name}
                            </Typography>
                            <Box height='100%' display='flex' flexWrap='wrap' justifyContent='center'>
                                {item.items.map((skill, index) => {
                                    return (
                                        <Box key={index} m='0 20px'>
                                            <Tooltip arrow={true} title={skill.description}>
                                                <IconButtonStyled size='medium'>
                                                    <Box
                                                        height='80px'
                                                        width='80px'
                                                        display='flex'
                                                        justifyContent='center'
                                                        alignItems='center'
                                                    >
                                                        <img
                                                            className={classes.skillImage}
                                                            height='100%'
                                                            width='100%'
                                                            alt={skill.name}
                                                            src={skill.img}
                                                        />
                                                    </Box>
                                                </IconButtonStyled>
                                            </Tooltip>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <Grid className={classes.root} container wrap='wrap' justify='center'>
            <Grid className={classes.gridItem} item md={5} xs={12}>
                <AboutSection />
            </Grid>
            <Divider
                style={{ display: displayDivider ? "block" : "none" }}
                className={classes.divider}
                variant='fullWidth'
                light
                flexItem
                orientation='horizontal'
            />
            <Grid className={classes.gridItem} item md={5} xs={12}>
                <SkillSection />
            </Grid>
        </Grid>
    );
};

export default About;
