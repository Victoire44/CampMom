import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Maps = withGoogleMap(props => (
    <GoogleMap
        defaultCenter={props.position != null ? props.position : { lat: 39.833333, lng: -98.583333 }}
        defaultZoom={props.position != null ? 11 : 3}
    >
        {props.position != null ? <Marker position={props.position} /> : null}
    </GoogleMap>
));

export default Maps;