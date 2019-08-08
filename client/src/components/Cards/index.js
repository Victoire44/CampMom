import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Maps from '../Maps';
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
        fontFamily: "Red Hat Display, sans-serif"
    },
}));

function MapCard(props) {
    const classes = useStyles();

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
                                            {console.log(campground)}
                                            <Maps
                                                position={position}
                                                parkCode={campground.parkCode}
                                                name={campground.name}
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
                                        <CardActions>
                                            <MyModal campground={campground} />
                                            <i className="material-icons" style={{ cursor: "pointer", position: "absolute", color: "#ffc000", fontSize: "33px" }} onClick={() => handleFavorite(campground.parkCode, campground.id)}>
                                                {favorites.map(favorite => favorite.campgroundId).includes(campground.id) ? "star" : "star_border"}
                                            </i>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
        </div>
    );
}

export default MapCard