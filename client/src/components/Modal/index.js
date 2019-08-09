import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import API from "../../utils/API";

import "./style.css";

const useStyles = makeStyles(theme => ({
    button: {
        background: "#9D2F16",
        color: "white",
    },
    modal: {
        position: "absolute",
        overflow: "scroll",
        height: "100%",
        display: "block",
        padding: "20px"
    },
    title: {
        textAlign: "center",
        background: "#225c5e",
        color: "white",
        padding: "40px"
    },
    trailLink: {
        textDecoration: "none",
        color: "black",
    },
    container: {
        padding: theme.spacing(4, 8),
    }
}));


function MyModal(props) {
    const classes = useStyles();

    //Open and close the modal
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Trails 
    const [trails, setTrails] = useState([])

    useEffect(() => {
        const latLongString = props.campground.latLong;
        const regex = /[\d.-]+/g;
        const latLong = latLongString.match(regex);
        const position = latLong != null ? { lat: parseFloat(latLong[0]), lng: parseFloat(latLong[1]) } : null

        if (position !== null) {
            API.getTrails(position.lat, position.lng)
                .then(trails => setTrails(trails.trails))
                .catch(err => console.error(err));
        }
    }, [props.campground.latLong])

    return (
        <div style={{ margin: "0 auto" }}>
            <Button onClick={handleOpen} size="small" variant="contained" className={classes.button} buttonStyle={{ borderRadius: 25 }}
                style={{ borderRadius: 25 }}>Learn More
                </Button>

            <Modal className={classes.modal}

                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <Container maxWidth="md" className="modal">
                    <Paper className={classes.root}>
                        <div className="container">
                            <Typography variant="h3" component="h3" className={classes.title}>
                                {props.campground.name}
                            </Typography>
                            <br />
                            <div className={classes.container}>
                                <Typography component="p" style={{ textAlign: "justify" }}>
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
                                    <strong> Weather: </strong> {props.campground.weatheroverview}
                                </Typography>
                                <Typography style={{ textAlign: "center" }}>
                                    {trails.length === 0 ? (<div></div>
                                    ) : (
                                            <div>
                                                <h2>Trails</h2>
                                                {trails.map(trail => (
                                                    <div>
                                                        <h3> {trail.name}</h3>
                                                        {trail.imgSmallMed.length === 0 ? (<div></div>) : (<img src={trail.imgSmallMed} alt="trail"></img>)}
                                                        <p><strong>Rating:</strong> {trail.stars}</p>
                                                        <p><strong>Length:</strong> {trail.length}</p>
                                                        <p><strong>Description:</strong> {trail.summary}</p>

                                                        <Button size="small" variant="contained" className={classes.button} buttonStyle={{ borderRadius: 25 }}
                                                            style={{ borderRadius: 25 }}><a className={classes.trailLink} href={trail.url} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}> Learn More </a>
                                                        </Button>
                                                        <hr></hr>
                                                        <br></br>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </Typography>
                            </div>
                        </div>
                    </Paper>
                </Container>
            </Modal>
        </div>
    )
}

export default MyModal; 