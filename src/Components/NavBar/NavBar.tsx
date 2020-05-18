import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    makeStyles,
    withStyles,
    Hidden,
    IconButton,
    List,
    ListItem,
    SwipeableDrawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: { color: "white" },
    toolbar: {
        width: "80%",
        margin: "auto",
        height: "70px",
    },
    selectedButton: {
        borderBottom: "#b03030 solid 3px",
    },
});

const ButtonStyled = withStyles({
    root: {
        height: "100%",
        borderRadius: "2px 2px 0px 0px",
        margin: "0 10px",
        width: "100px",
        color: "inherit",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255,0.2)",
        },
    },
})(Button);

const SwipeableDrawerStyled = withStyles({
    paper: {
        backgroundColor: "#4f4a4a",
        width: "200px",
    },
})(SwipeableDrawer);

const menuNames: string[] = ["home", "about", "projects", "contact"];

const MenuListMobile: React.FC<{
    selected: string;
    handleMenuNavigation: (item: string) => void;
}> = ({ selected, handleMenuNavigation }) => {
    return (
        <List>
            {menuNames.map((item, index) => (
                <ListItem
                    selected={selected === `/${item}`}
                    button
                    key={index}
                    alignItems='center'
                    onClick={() => handleMenuNavigation(`/${item}`)}
                >
                    <Typography>{item.toUpperCase()}</Typography>
                </ListItem>
            ))}
        </List>
    );
};

const MenuListWideScreen: React.FC<{
    classes: any;
    selected: string;
    handleMenuNavigation: (item: string) => void;
}> = ({ classes, selected, handleMenuNavigation }) => {
    return (
        <Box position='relative' height='100%' display='flex' alignItems='center'>
            {menuNames.map((item, index) => (
                <ButtonStyled
                    key={index}
                    className={selected === `/${item}` ? classes.selectedButton : undefined}
                    name={item}
                    onClick={() => handleMenuNavigation(`/${item}`)}
                >
                    {item.toUpperCase()}
                </ButtonStyled>
            ))}
        </Box>
    );
};

type State = {
    selected: string;
    openDrawer: boolean;
    appBarColor: string;
};

const NavBar: React.FC = () => {
    const classes = useStyles();
    const [data, setData] = useState<State>({
        selected: "/",
        openDrawer: false,
        appBarColor: "transparent",
    });
    const location = useLocation();
    const historyPush = useHistory();

    useEffect(() => {
        trackPagePath(location.pathname);
        addEventListeners();
        // eslint-disable-next-line
    }, [location]);

    const addEventListeners = () => {
        window.addEventListener("scroll", handleScrollChange);
    };

    const handleScrollChange = () => {
        if (window.scrollY > 10) {
            setData((prev) => ({ ...prev, appBarColor: "black" }));
        } else {
            setData((prev) => ({ ...prev, appBarColor: "transparent" }));
        }
    };

    const trackPagePath = (path: string) => {
        const pathName = checkIfHomepage(path) ? "/home" : path;
        setData({ ...data, selected: pathName });
    };

    const handleDrawerOpening = () => setData((prev) => ({ ...prev, openDrawer: !data.openDrawer }));

    const handlePathNavigating = (path: string) => {
        const pathName = path === "/home" ? "/" : path;
        historyPush.push(pathName);
    };

    //because i dont want to change drawer status - open/close when app is on wide screen, otherwise it mess up with that and boom
    const handleMenuNavigationWideScreen = (path: string) => {
        handlePathNavigating(path);
    };

    const handleMenuNavigationMobile = (path: string) => {
        handlePathNavigating(path);
        handleDrawerOpening();
    };

    const checkIfHomepage = (path: string) => (path === "/" ? true : false);

    return (
        <React.Fragment>
            <AppBar className={classes.root} elevation={0} style={{ backgroundColor: data.appBarColor }}>
                <Toolbar className={classes.toolbar}>
                    <Box style={{ cursor: "pointer" }} onClick={() => handlePathNavigating("/")}>
                        <span
                            style={{
                                borderRight: "2px solid white",
                                paddingRight: "8px",
                            }}
                        >
                            <Typography
                                style={{
                                    display: "inline-block",
                                }}
                            >
                                Matas
                            </Typography>
                        </span>
                        <span style={{ paddingLeft: "8px" }}>
                            <Typography
                                variant='h4'
                                style={{
                                    display: "inline-block",
                                }}
                            >
                                DEV
                            </Typography>
                        </span>
                    </Box>

                    <Box ml='auto' height='100%'>
                        <Hidden smDown>
                            <MenuListWideScreen
                                classes={classes}
                                selected={data.selected}
                                handleMenuNavigation={handleMenuNavigationWideScreen}
                            />
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton color='inherit' onClick={handleDrawerOpening}>
                                <Menu fontSize='large' />
                            </IconButton>
                        </Hidden>
                        <SwipeableDrawerStyled
                            anchor='right'
                            open={data.openDrawer}
                            onOpen={handleDrawerOpening}
                            onClose={handleDrawerOpening}
                            disableSwipeToOpen={true}
                        >
                            <MenuListMobile
                                selected={data.selected}
                                handleMenuNavigation={handleMenuNavigationMobile}
                            />
                        </SwipeableDrawerStyled>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar style={{ marginBottom: "10px" }} />
        </React.Fragment>
    );
};

export default NavBar;
