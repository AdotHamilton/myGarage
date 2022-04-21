import { Google } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'

const MapMarker = (options) => {
    const [ marker, setMarker ] = useState();

    useEffect(() => {
        if(!marker) {
            setMarker(new Google.maps.Marker());
        }
        return () => {
            if(marker) {
                marker.setMap(null);
            }
        };
    }, [marker])
    useEffect(() => {
        if(marker){
            marker.setOptions(options);
        }
    }, [marker, options])
    return null;
};

export default MapMarker