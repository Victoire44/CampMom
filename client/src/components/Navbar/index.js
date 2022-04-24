// import React from 'react';
// import { makeStyles, useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Drawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Login from '../Login';
// import Link from '@mui/material/Link';

// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
//     toolbar: {
//         background: "#225c5e",
//     },
//     root: {
//         flexGrow: 1,
//     },
//     appBar: {
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//         fontFamily: "Red Hat Display, sans-serif",
//         fontSize: "22px",
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: 'flex',
//         alignItems: 'center',
//         padding: '0 8px',
//         ...theme.mixins.toolbar,
//         justifyContent: 'flex-end',
//     },
//     title: {
//         flexGrow: 1,
//     }

// }));

// function Navbar(props) {
//     const theme = useTheme();
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     function handleDrawerOpen() {
//         setOpen(true);
//     }

//     function handleDrawerClose() {
//         setOpen(false);
//     }

//     return (
//         <div>
//             <div className={classes.root}>
//                 <AppBar position="static">
//                     <Toolbar className={classes.toolbar}>
//                         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
//                             <MenuIcon />
//                         </IconButton>
//                         <Typography variant="h6" className={classes.title}>
//                             <a style={{ color: "white", textDecoration: "none" }} href="/">Camp.Mom</a>
//                         </Typography>
//                         <Login isLoggedIn={props.isLoggedIn} handleLogin={props.handleLogin} />
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer
//                     className={classes.drawer}
//                     variant="persistent"
//                     anchor="left"
//                     open={open}
//                     classes={{
//                         paper: classes.drawerPaper,
//                     }}
//                 >
//                     <div className={classes.drawerHeader}>
//                         <IconButton onClick={handleDrawerClose}>
//                             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         </IconButton>
//                     </div>
//                     <Divider />
//                     <List>
//                         <ListItem button key="Home">
//                             <Link href="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
//                         </ListItem>
//                         <ListItem button key="Favorites">
//                             <Link href="/favorites" style={{ textDecoration: "none", color: "black" }}>Favorites</Link>
//                         </ListItem>
//                         <ListItem button key="Trips">
//                             <Link href="/trips" style={{ textDecoration: "none", color: "black" }}>Trips</Link>
//                         </ListItem>
//                     </List>
//                 </Drawer>
//             </div>
//         </div>
//     );
// }

// export default Navbar;