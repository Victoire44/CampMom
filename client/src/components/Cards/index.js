import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MyModal from "../Modal"
import API from '../../utils/API'

const useStyles = makeStyles(theme => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    title: {
        textAlign: "center"
    },
    noResults: {
        textAlign: "center",
        fontFamily: "Roboto, sans-serif"
    },
}));

function MapCard(props) {
    const classes = useStyles();

    const Map = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={props.position != null ? props.position : { lat: 39.833333, lng: -98.583333 }}
            defaultZoom={props.position != null ? 11 : 3}
        >
            {props.position != null ? <Marker position={props.position} /> : null}
        </GoogleMap>
    ));

    return (
        <Container maxWidth="md" style={{ marginTop: 70 }}>
            {props.campgrounds.length === 0 ?
                (<h1 className={classes.noResults}>No results</h1>
                ) : (
                    <Grid container justify="center" spacing={7}>
                        {props.campgrounds.map(campground => {
                            var latLongString = campground.latLong;
                            var regex = /[\d.-]+/g;
                            var latLong = latLongString.match(regex);
                            var position = latLong != null ? { lat: parseFloat(latLong[0]), lng: parseFloat(latLong[1]) } : null

                            return (
                                <Grid key={campground.id} item xs={12} md={4}>
                                    <Card className={classes.card}>
                                        <div style={{ height: 200 }}>
                                            <Map
                                                position={position}
                                                containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                                                mapElement={<div style={{ height: `100%` }} />}

                                            />
                                        </div>
                                        <CardActionArea>
                                            <CardContent >
                                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                                    {campground.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <div style={{ flex: 1 }}></div>
                                        <i className="material-icons" onClick={() => API.saveFavorite(campground.parkCode, campground.id)}>star_border</i>
                                        <CardActions style={{ margin: "0 auto" }}>
                                            <MyModal campground={campground} />
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
        </Container>
    );
}

export default MapCard