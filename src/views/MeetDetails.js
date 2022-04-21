import { AccessTime, AddLocation, LocationCity, LockClock, People } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { Link } from '@reach/router'
import { navigate } from '@reach/router'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleButton from '../components/SimpleButton'
import MapContainer from './MapContainer'
import "./meetDetails.css"
const MeetDetails = (props) => {
    const [ loading, setLoading ] = useState(true);
    const [ meet, setMeet ] = useState({})
    const [ date, setDate ] = useState("")
    const [ locationData, setLocationData] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/events/findById/${props.meetId}`)
        .then((res) => {
            console.log(res)
            setMeet(res.data);
            let temp = new Date(res.data.date);
            setDate(temp.toDateString() + " @" + temp.toLocaleTimeString());
            let address = res.data.address
            console.log(address)
            address = address.replace(/\s/g, "_")
            let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address + "," + res.data.state}&key=${process.env.REACT_APP_MAPS_KEY}`
            console.log(url)
            axios.get(url)
            .then(res => {
                console.log(res.data)
                setLocationData(res.data.results[0])
                setLoading(false);
            })
            .catch(err => console.log(err))

        }) 
        .catch((err) => {
            console.log(err)
            navigate("/app")
        })

    }, [props.meetId])
    return (

    <div id="meet_details_container">
        {
            !loading ?
        <>
        <div id="meet_details_header">
            <div id="meet_banner_container">
                <img src={meet.bannerUrl} />
            </div>
            <div id="meet_header_bottom">
                <h4 id="date">{date}</h4>
                <h2>{meet.title}</h2>
                <p>At {locationData.formatted_address}</p>

            </div>
            <div id="meet_actions">
                <h2>Info</h2>
                <div id="meet_actions_buttons">
                    <SimpleButton>RSVP</SimpleButton>
                </div>
            </div>
        </div>
        <div id="meet_details_body">
            <div id="meet_details_description">
                <h2>Details</h2>
                <div><People htmlColor='gray' /><p> 120 Attendees</p></div>
                <div><AddLocation htmlColor='gray' /><p> At <b>{ meet.address }</b></p></div>
                <div>
                    <Avatar src={meet.creator.pfp} />
                    <p> Hosted by <Link to={"/app/Profile/" + meet.creator.displayName}>
                        {meet.creator.displayName}</Link>
                    </p>
                </div>
                <div><AccessTime htmlColor="gray" /><p> 120 People Attending</p></div>
                <p>{meet.description}</p>
                <p>{meet.description}</p>
                <p>{meet.description}</p>
                <p>{meet.description}</p>
            </div>
            <div id="meet_maps_frame">
                <MapContainer location={locationData.geometry.location}
                />
            </div>
        </div>
        </> : ""
        }
    </div>
  )
}

export default MeetDetails