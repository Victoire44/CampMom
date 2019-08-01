import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(30, 0)
    },
    paper: {
        outline: 'none'
    }
}));

function MapCard(props) {
    const classes = useStyles();

    const campgrounds = ["Yosemite", "Lake Tahoe", "Lake Tahoe", "Lake Tahoe"]

    const Map = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 39.833333, lng: -98.583333 }}
            defaultZoom={3}
        >
            <Marker position={{ lat: 39.833333, lng: -98.583333 }} />
        </GoogleMap>
    ));

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="md">
            <Grid container justify="center" spacing={7}>
                {campgrounds.map(result => (
                    <Grid key={result} item xs={12} md={4}>
                        <Card>
                            <div style={{ height: 200 }}>
                                <Map
                                    containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                                    mapElement={<div style={{ height: `100%` }} />}
                                />
                            </div>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Title
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Description
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button onClick={handleOpen} size="small" color="primary">Learn More</Button>
                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Container maxWidth="md">
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
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MapCard