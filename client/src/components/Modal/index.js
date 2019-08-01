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
        margin: theme.spacing(30, 0)
    },
}));

function MyModal() {
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
            <Button onClick={handleOpen} size="small" color="primary">Learn More</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Container maxWidth="md" className="modal">
                    <Paper className={classes.root}>
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                </Container>
            </Modal>
        </div>
    )
}

export default MyModal; 