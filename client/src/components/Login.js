import React from 'react';
import Modal from '@material-ui/core/Modal';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    modal: {
        position: "absolute",
        overflow: "scroll",
        height: "100%",
        display: "block",
        padding: "20px"
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        border: 'none',
        position: 'absolute',
        top: "35%",
        left: "35%",
        fontFamily: "Red Hat Display, sans-serif"
    },
}));


function Login(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button  color="inherit" onClick={handleOpen}>{props.isLoggedIn ? "Logout" : "Login"}</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <h2 id="modal-title">Sign In</h2>
                    <Form handleLogin ={props.handleLogin} >

                    </Form>
                </div>
            </Modal>
        </div>
    );
}

export default Login;