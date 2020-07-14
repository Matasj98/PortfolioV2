import React, { useState } from "react";
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardHeader,
    Collapse,
    Link,
    Button,
    CircularProgress,
    IconButton,
    Typography,
    makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { projects } from "../../projectsList";

const useStyles = makeStyles({
    card: {
        minHeight: "350px",
        width: "400px",
        margin: "10px",
        zIndex: 999,
        // backgroundColor: "#e3b8b8",
        // display: 'inline-block'
    },
    cardContent: {
        height: "35px",
    },
    expandButton: {
        marginLeft: "auto",
    },
    isExpandedNo: {
        transition: "0.5s all",
        transform: "rotate(0deg)",
    },
    isExpandedYes: {
        transition: "0.5s all",
        transform: "rotate(180deg)",
    },
});

const Projects: React.FC = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<number[]>([]);
    const [loadedImages, setLoadedImages] = useState<number[]>([]);

    const addToExpanded = (index: number) => {
        setExpanded(expanded.concat(index));
    };

    const removeFromExpanded = (index: number) => {
        let temp = [...expanded];
        const place = temp.indexOf(index);
        temp.splice(place, 1);
        setExpanded(temp);
    };

    const addLoadedImages = (index: number) => {
        setLoadedImages(loadedImages.concat(index));
    };

    return (
        <Box minHeight='91vh'>
            <Box width='100%' display='inline-flex' alignItems='flex-start' justifyContent='center' flexWrap='wrap'>
                {projects.map((item, index) => (
                    <Card key={index} className={classes.card}>
                        <CardHeader title={item.name} />
                        <CardMedia
                            style={loadedImages.includes(index) ? { display: "block" } : { display: "none" }}
                            component='img'
                            height='150px'
                            title={item.name}
                            onLoad={() => addLoadedImages(index)}
                            image={item.img}
                        />
                        <Box
                            height='150px'
                            display={loadedImages.includes(index) ? "none" : "flex"}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <CircularProgress />
                        </Box>
                        <CardContent className={classes.cardContent}>
                            <Typography variant='body2' component='p'>
                                Technologies used: {item.technology}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Link underline='none' href={item.demo}>
                                <Button style={{ color: "#b03030" }}>Website</Button>
                            </Link>
                            <Link underline='none' href={item.code}>
                                <Button style={{ color: "#b03030" }}>
                                    {item.code === "#" ? "Code not available" : "Code"}
                                </Button>
                            </Link>
                            <IconButton
                                className={classes.expandButton}
                                style={{ color: "#b03030" }}
                                onClick={() =>
                                    expanded.includes(index) ? removeFromExpanded(index) : addToExpanded(index)
                                }
                            >
                                <ExpandMoreIcon
                                    className={expanded.includes(index) ? classes.isExpandedYes : classes.isExpandedNo}
                                    fontSize='large'
                                />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded.includes(index)} timeout='auto'>
                            <CardContent>
                                <Typography variant='h6'>About:</Typography>
                                <Typography align='justify' variant='body2'>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
