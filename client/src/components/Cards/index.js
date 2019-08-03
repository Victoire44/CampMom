import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MyModal from "../Modal"


function MapCard(props) {
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
            <Grid container justify="center" spacing={7}>
                {props.campgrounds.map(campground => {
                    var latLongString = campground.latLong;
                    var regex = /[\d.-]+/g;
                    var latLong = latLongString.match(regex);
                    var position = latLong != null ? { lat: parseFloat(latLong[0]), lng: parseFloat(latLong[1]) } : null

                    return (
                        <Grid key={campground.id} item xs={12} md={4}>
                            <Card style={{ height: "100%" }}>
                                <div style={{ height: 200 }}>
                                    <Map
                                        position={position}
                                        containerElement={<div style={{ height: `100%`, width: `100%` }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {campground.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <MyModal />
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}

export default MapCard