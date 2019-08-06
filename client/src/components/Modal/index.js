import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import "./style.css";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(8, 5),
        // margin: theme.spacing(30, 0)
    },
    button: {
        background: "#9D2F16",
        color: "white",
    },
}));

function MyModal(props) {
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
            <Button onClick={handleOpen} size="small" variant="contained" className={classes.button} buttonStyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}>Learn More
                </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Container maxWidth="md" className="modal">
                    <Paper className={classes.root}>
                        <Typography variant="h3" component="h3">
                            {props.campground.name}
                        </Typography>
                        <br />
                        <Typography component="p">
                            {props.campground.description}
                        </Typography>
                        <br />
                        <Typography component="p">
                            {props.campground.directionsoverview}
                        </Typography>
                        <br />
                        <Typography component="p">
                            {props.campground.accessibility.adainfo}
                        </Typography>
                        <br />
                        <Typography component="p">
                            {props.campground.accessibility.firestovepolicy}
                        </Typography>
                        <br />
                        <Typography component="p">
                            {props.campground.weatheroverview}
                        </Typography>
                    </Paper>
                </Container>
            </Modal>
        </div>
    )
}

export default MyModal; 