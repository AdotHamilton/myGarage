import { navigate } from '@reach/router';
import { Link } from '@reach/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectViewName, setViewName } from '../redux/appSlice';
import { logout, selectUser } from '../redux/userSlice';

const SidebarOption = ({text, Icon, handleClick}) => {
  const dispatch = useDispatch();
  let user = useSelector(selectUser);
  let view = useSelector(selectViewName);
  const handleViewChange = () => {
    switch(text){
      case "Home":
        navigate("/app")
        break;
      case "Logout":
        dispatch(logout())
        break;
      case "Profile":
        navigate("/app/Profile/" + user.displayName)
        break;
      case "Meets":
        navigate("/app/Meets")
        break;
      case "Services":
        navigate("/app/Services")
        break;
    }
    dispatch(setViewName(text))
  }

  return (
    <div className={`sidebar_item ${view === text ? "active" : ""}`}  id={text} onClick={handleViewChange}> 
    <>
        { user.pfp ? <Icon src={user.pfp} />
         : 
         <Icon />
         }
      </>  
        <h3>{text}</h3>
    </div> 
  )
}

export default SidebarOption