import React, { Children, cloneElement, useEffect, useRef, useState } from 'react'

const MapComponent = (props) => {
    const ref = useRef(null);
    const [ map, setMap ] = useState();
    const { center, zoom } = props;
    useEffect(() => {
        if(ref.current && !map){
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
            }))
        }
    }, [ref, map])

    return (
        <>
            <div ref={ref} id="map" />
            {Children.map((child) => {
                return cloneElement.child(child, { map });
            })}
        </>
    )
}

export default MapComponent;