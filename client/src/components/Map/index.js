import React, { Component } from 'react';
import { Map, GoogleMapReact, Marker } from 'google-maps-react';


class Map extends Component {


    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMap
                    bootstrapURLKeys={{ key: 'AIzaSyBmSLZewBiOZn3GJAasNRzdzRYA_Bi4qyo' }}
                    defaultCenter={{ lat: 39.833333, lng: -98.583333 }}
                    defaultZoom={10}
                >
                    <Marker
                        position={{ lat: 48.00, lng: -122.00 }}
                    />
                </GoogleMap>
            </div>
        );
    }
}


export default Map;