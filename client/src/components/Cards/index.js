import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(
    createStyles({
        card: {
            // borderRadius: 0,
            margin: 1
        }
    })
);

function MapCard(props) {
    const classes = useStyles();
    const campgrounds = ["Yosemite", "Lake Tahoe", "Lake Tahoe", "Lake Tahoe"]
    return (
        <Container maxWidth="lg">
        <div className={classes.root}>
            <GridList cellHeight={340} spacing={50} className={classes.gridList} cols={3}>
                {campgrounds.map(result => (
                    <GridListTile key={result} padding={40} cols={1}>
                        <Card className={classes.card}>
                            <div style={{ height: 200 }}>
                                <Map style={{ height: 200 }} google={props.google} zoom={10}>
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
                    </GridListTile>
                ))}
            </GridList>
        </div>
        </Container>
    );
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBmSLZewBiOZn3GJAasNRzdzRYA_Bi4qyo")
})(MapCard)