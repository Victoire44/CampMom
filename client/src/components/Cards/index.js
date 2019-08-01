import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles(
    createStyles({
        card: {
            maxWidth: 345,
        }
    })
);

function MapCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div style={{ height: 200 }}>
                <Map style={{ height: 200, maxWidth: 345 }} google={props.google} zoom={10}>
                    <Marker onClick={props.onMarkerClick}
                        name={'Current location'} />
                </Map>
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
                <Button size="small" color="primary">Favorite</Button>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBmSLZewBiOZn3GJAasNRzdzRYA_Bi4qyo")
})(MapCard)