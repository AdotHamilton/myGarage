import React, { useEffect, useRef, useState } from 'react'


import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { CircularProgress } from '@mui/material';
import MapComponent from '../components/MapComponent';
import MapMarker from '../components/MapMarker';

const render = (status)  => {
    if (status === Status.FAILURE) return <></>;
    return <CircularProgress />;
  };

const MapContainer = (props) => {
    const center = props.location
    const zoom = 16;
    return(
        <Wrapper apiKey={process.env.REACT_APP_MAPS_KEY} render={render}>
            <MapComponent center={center} zoom={zoom} >
                <MapMarker position={center} />
            </MapComponent>
        </Wrapper>

    )


}
export default MapContainer;
