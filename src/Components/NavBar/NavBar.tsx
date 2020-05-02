import React, {useState, useEffect} from "react";
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
import {Menu} from "@material-ui/icons";
import {useHistory, useLocation} from "react-router-dom";

const useStyles = makeStyles({
    root: {backgroundColor: "transparent", color: "white"},
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
}> = ({selected, handleMenuNavigation}) => {
    return (
        <List>
            {menuNames.map((item, index) => (
                <ListItem
                    selected={selected === `/${item}`}
                    button
                    key={index}
                    alignItems="center"
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
}> = ({classes, selected, handleMenuNavigation}) => {
    return (
        <Box position="relative" height="100%" display="flex" alignItems="center">
            {menuNames.map((item, index) => (
                <ButtonStyled
                    key={index}
                    className={
                        selected === `/${item}` ? classes.selectedButton : undefined
                    }
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
};

const NavBar: React.FC = () => {
    const classes = useStyles();
    const [data, setData] = useState<State>({
        selected: "/",
        openDrawer: false,
    });
    const location = useLocation();
    const historyPush = useHistory();

    useEffect(() => {
        trackPagePath(location.pathname);
    }, [location]);

    const trackPagePath = (path: string) => {
        const pathName = checkIfHomepage(path) ? "/home" : path;
        setData({...data, selected: pathName});
    };

    const handleMenuNavigation = (path: string) => {
        const pathName = path === "/home" ? "/" : path;
        historyPush.push(pathName);
    };

    const checkIfHomepage = (path: string) => (path === "/" ? true : false);

    const handleDrawerOpening = () =>
        setData({...data, openDrawer: !data.openDrawer});

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <Box>
          <span style={{borderRight: "2px solid white", paddingRight: "8px"}}>
            <Typography style={{display: "inline-block"}}>Matas</Typography>
          </span>
                    <span style={{paddingLeft: "8px"}}>
            <Typography variant="h4" style={{display: "inline-block"}}>
              DEV
            </Typography>
          </span>
                </Box>

                <Box ml="auto" height="100%">
                    <Hidden smDown>
                        <MenuListWideScreen
                            classes={classes}
                            selected={data.selected}
                            handleMenuNavigation={handleMenuNavigation}
                        />
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton color="inherit" onClick={handleDrawerOpening}>
                            <Menu fontSize="large"/>
                        </IconButton>
                        <SwipeableDrawerStyled
                            anchor="right"
                            open={data.openDrawer}
                            onOpen={handleDrawerOpening}
                            onClose={handleDrawerOpening}
                            swipeAreaWidth={50}
                        >
                            <MenuListMobile
                                selected={data.selected}
                                handleMenuNavigation={handleMenuNavigation}
                            />
                        </SwipeableDrawerStyled>
                    </Hidden>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
