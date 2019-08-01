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
    const campgrounds = ["Yosemite", "Lake Tahoe", "Lake Tahoe", "Lake Tahoe"]

    const Map = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 39.833333, lng: -98.583333 }}
            defaultZoom={3}
        >
            <Marker position={{ lat: 39.833333, lng: -98.583333 }} />
        </GoogleMap>
    ));

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
                                <MyModal />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default MapCard