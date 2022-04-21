import React, { useEffect, useState } from 'react'
import Feed from '../components/Feed'
import Profile from './Profile';
import SidebarOption from '../components/SidebarOption';
import WidgetBar from '../components/WidgetBar';

import {IoDiamondOutline} from "react-icons/io5";
import {GiMechanicGarage}  from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import PostButton from '../components/PostButton';
import "./dashboard.css";
import "../components/sidebar.css";
import { selectViewName } from '../redux/appSlice';
import { selectUser, logout } from '../redux/userSlice';
import { navigate } from '@reach/router';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Meets from './Meets';
import { Router } from '@reach/router';
import ErrorPage from './ErrorPage';
import { Redirect } from '@reach/router';
const Dashboard = props => {
  const {children} = props;
  const activeView = useSelector(selectViewName);
  const user = useSelector(selectUser);

  return (
   <div id="dash_body">
    {
      user ? 
    <>
      <Header main />
      <div className='dash_main'>
        <Sidebar />
        {
          children
        }

      </div>
    </>
    :  <Redirect to="/login" />
    }
    </div>
  )
}

export default Dashboard