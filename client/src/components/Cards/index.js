import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        API.getFavorites()
            .then(favorites => setFavorites(favorites))
            .catch(err => console.error(err));
    }, []);

    const handleFavorite = (parkCode, id) => {
        if (favorites.map(favorite => favorite.campgroundId).includes(id)) {
            API.deleteFavorite(id)
                .then(() => setFavorites(favorites.filter(favorite => favorite.campgroundId !== id)))
                .catch(err => console.error(err));
        } else {
            API.saveFavorite(parkCode, id)
                .then(() => setFavorites(favorites.concat([
                    {
                        parkCode: parkCode,
                        campgroundId: id
                    }
                ])))
                .catch(err => console.error(err));
        }
    }

    return (
        <div>
            {props.campgrounds.length === 0 ?
                (<h1 className={classes.noResults}>-</h1>
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
                                        {console.log(favorites)}
                                        <CardActions>

                                            <MyModal campground={campground} />
                                            <i className="material-icons" style={{ cursor: "pointer", position: "absolute" }} onClick={() => handleFavorite(campground.parkCode, campground.id)}>
                                                {favorites.map(favorite => favorite.campgroundId).includes(campground.id) ? "star" : "star_border"}
                                            </i>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                )}
        </div>
    );
}

export default MapCard