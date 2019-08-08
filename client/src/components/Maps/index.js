import React, { useState, useEffect } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const apiKey = "AIzaSyBmSLZewBiOZn3GJAasNRzdzRYA_Bi4qyo"
const googleMapsClient = require('@google/maps').createClient({ key: apiKey });

const MapWithMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap center={props.position} defaultZoom={10} >
        <Marker position={props.position} />
    </GoogleMap>
))

function Maps(props) {
    const [position, setPosition] = useState({ lat: 39.833333, lng: -98.583333 })

    useEffect(() => {
        if (props.position === null) {
            googleMapsClient.geocode({ address: `${props.parkCode}, ${props.name}` }, (err, response) => {
                if (!err) {
                    setPosition(response.json.results[0].geometry.location)
                } else {
                    console.error(err)
                }
            });
        } else {
            setPosition(props.position);
        }
    }, [props.position, props.name, props.parkCode])

    return (
        <MapWithMarker
            position={position}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
}

export default Maps;
