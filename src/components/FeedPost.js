import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material';
import { ThumbUp } from '@material-ui/icons';
import { Divider } from '@material-ui/core';
import { Link } from '@reach/router';
const FeedPost = (props) => {
    const { post, dateNow, postDate } = props;
    let differenceInMS = dateNow - postDate;
    let diffHours = differenceInMS / (1000 * 60 * 60 )
    let inDays = diffHours > 23;
    return (
    <div>
        <div className='feed_post'>
            <div className='post_user'>
                <Link to={"/app/Profile/"+post.creator.displayName} >
                <Avatar src={post.creator.pfp}
                    sx={{width: 100, height: 100}}
                />
                </Link>
                <div className="post_info">
                    <h2>{post.creator.displayName}</h2>
                    <p>Posted {
                        inDays ?// if post was made 1 or more day ago 
                        <>
                        {(diffHours / 24).toFixed(0) + " days "}   
                        </> : diffHours > 1.0  ?
                            <>
                            {diffHours.toFixed(0)} hours
                            </>
                            : "less than 1 hour "
                        }
                        ago</p> 
                        
                </div>
                
            </div>
            <Divider variant="fullWidth" />
            <img className="post_image" src={post.image} />
            <div className='post_content'>
                <p>{post.content}</p>
                <Divider variant="fullWidth" />
                <div className='interaction'>
                    <ThumbUp /><p>2</p>
                </div>
            </div>
            
            
            

        </div>
    </div>
  )
}

export default FeedPost