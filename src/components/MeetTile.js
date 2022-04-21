import React, { useEffect } from 'react'
import tileImg from "../media/testMeetImage.jpg"
import { Divider } from '@mui/material';
import SimpleButton from './SimpleButton';
import { Link } from '@reach/router';

const MeetTile = (props) => {
  const { event, meetDate } = props;
  useEffect(() => {
    console.log(meetDate)
  }, [])
  return (
    <div className="meet_tile">
      <Link to={"" +event.id} >
        <img className="tile_img" src={event.bannerUrl}  />
      </Link>
        
        <div className='tile_info'>
            <h4>{event.title}</h4>
            <h6>{meetDate.toLocaleString()}</h6>
            <h6>At {event.address}, {event.state}</h6>
        </div>
        <Divider />
        <div className='tile_actions' >
          <SimpleButton>RSVP</SimpleButton>
        </div>
    </div>
  )
}

export default MeetTile