import React from 'react';
import GoogleMapReact from 'google-map-react';
 function Map(){
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        // Important! Always set the container height explicitly
        <div className="map mapboxgl-map" id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "  " }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}
export default Map