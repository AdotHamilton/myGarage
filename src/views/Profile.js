import { Avatar, Button } from '@material-ui/core';
import { Garage } from '@mui/icons-material';
import { ButtonBase, Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FeedPost from '../components/FeedPost';
import Header from '../components/Header'
import PostButton from '../components/PostButton';
import ProfileForm from '../components/ProfileForm';
import SimpleButton from '../components/SimpleButton';
import VehicleForm from '../components/VehicleForm';
import addImg from "../media/addImg.png"
import { login, selectUser, update } from '../redux/userSlice';
import "./profile.css"
const Profile = props => {
  const displayName = props.displayName;
  const loggedUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const [ user, setUser ] = useState(null);
  const [ posts, setPosts ] = useState([])
  const [ ready, setReady ] = useState(false);
  useEffect(() => {
    
    axios.get("http://localhost:8080/api/users/findByDisplayName/" + displayName)
    .then(res => {
      
      setUser(res.data);
      axios.get("http://localhost:8080/api/posts/getPostsForCreator/" + res.data.id)
      .then(res => {
        console.log("api call")

        setPosts(res.data);
      })
    })
    .catch(err => console.log(err))
    setReady(true);
  }, [displayName])

  const handleImageChange = (e) => {
    if(loggedUser.id === user.id){ 
      let form_data = new FormData();
      form_data.append("pfp",e.target.files[0], e.target.files[0].name);
      form_data.append("user_id", user.id);
      form_data.append("pwHash", user.password);
      let url = "http://localhost:8080/api/users/updatePfp";
      axios.post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(res => {
        setUser({
          ...user,
          pfp : res.data.pfp
        })
        dispatch(update(res.data.pfp))
        displayName = displayName
      })
      .catch(err => console.log(err))
    }
   
  }

  return (
    <div id="profile_container">
      { user ? (
        <>
          <div id="profile_user">
            <div id="user_info">
              {
                user.pfp ? 
                <div class="file_input_wrapper">
                  <Avatar src={user.pfp} id="avatar"/>
                  {
                    loggedUser.id === user.id ? 
                    <input type="file" name="pfp" onInput={handleImageChange}/>
                    : ""
                  }
                </div>
                : <div class="file_input_wrapper">
                    <Avatar id="avatar"/>
                    <input type="file" name="pfp" onInput={handleImageChange}/>
                  </div>
              }
              <h1>{user.displayName}</h1>

            </div>
            <div id="profile_actions">
                <ProfileForm user={user} />
                
            </div>
          </div>
          <Divider />
          <div id="profile_content">
            <div id="user_left">
              <div id="bio">
                <h3>{user.displayName}'s Bio</h3>
                <p>loremlorem lore mlor emlo remlor eml oreml orem loreml oremlor emlorem lorem lorem loremlorem loremlorem loremlore mlorem loreml oremlorem</p>
              </div>
              <Divider />
              <div id="user_vehicles">
                <h2>Garage</h2>
                {
                  user.vehicles.length > 0 ? 
                  <>
                    {user.vehicles.map((vehicle) => {
                      return <p><Garage htmlColor='gray' />{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</p>
                    })}
                  </>
                  : <h4>{user.displayName} has no vehicles</h4>
                }
                <VehicleForm>Add Vehicles</VehicleForm>
              </div>
            </div>
            <Divider orientation='vertical' flexItem="true" />
            <div id="profile_feed">
              {
                user.displayName === loggedUser.displayName ?
                  <PostButton handleUpdate={(newPost) => setPosts([newPost, ...posts])} />
                : ""
              }
              {
                posts.length > 0 ? posts.map((post) => {
                  return <FeedPost post={post} key={post.id} dateNow={new Date()} postDate={new Date(post.date)} />
                }) : <h1>You have no posts</h1>
              }
            </div>
          </div>
        </>
        ) : ""
        }
    </div>
  )
}

export default Profile