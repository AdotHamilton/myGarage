import React, { useEffect, useState } from 'react'
import supraImg from "../media/A90_Supra.jpg"
import { ThumbUp } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import axios from 'axios'
import FeedPost from './FeedPost'
import PostButton from './PostButton'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'

const Feed = (props) => {
    const [ posts, setPosts ] = useState([]);
    const [ ready, setReady ] = useState(false);
    const [ update, setUpdate ] = useState(false);
    const [ startIndex, setStartIndex ] = useState(0);
    const [ endIndex, setEndIndex ] = useState(10);
    const user = useSelector(selectUser)
    const handleNewPost = (newPost) => {
        setPosts([newPost, ...posts]);
    }
    useEffect(() => {
     axios.get(`http://localhost:8080/api/posts/getFollowingPosts?user_id=${user.id}&length=10`)
        .then((res) => {
            console.log("Api call")
            setPosts(res.data)
            setReady(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <div className='main_feed'>
        <PostButton handleUpdate={handleNewPost} />
        {
            ready ? posts.map((post) => {
                return <FeedPost key={post.id} post={post} dateNow={new Date()} postDate={new Date(post.date)} />
            }) : ""
        }
        
    </div>
  )
}

export default Feed