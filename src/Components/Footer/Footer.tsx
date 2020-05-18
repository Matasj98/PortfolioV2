import React from "react";
import {
	Box,
	Typography,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		minHeight: "80px",
		backgroundColor: 'rgba(43, 43, 43, 0.4)',
		marginTop: '10px'
	},
	footerText: {
		border: 'solid 1px white'
	},
});

const Footer: React.FC = () => {
	const classes = useStyles();
	return (
		<Box
			style={{}}
			display='flex'
			alignItems='center'
			justifyContent='center'
			className={classes.root}>
			<Box p='10px' className={classes.footerText}>
				<Typography variant='body1'>
					Portfolio website created by Matas
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
