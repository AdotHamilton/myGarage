import React from 'react'
import { AddLocation, BusinessCenter, Home, Search, Payment, ExitToApp } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import SidebarOption from './SidebarOption';
const Sidebar = () => {
  return (

    <div className="sidebar">
        <div id="sidebar_options_container">
            <SidebarOption text="Profile" Icon={Avatar} />
            <SidebarOption text="Home" Icon={Home} /> 
            <SidebarOption text="Explore" Icon={Search} />      
            <SidebarOption text="Meets" Icon={AddLocation} />
            <SidebarOption text="Services" Icon={BusinessCenter} />
            <SidebarOption text="Premium" Icon={Payment} />
            <SidebarOption text="Logout" Icon={ExitToApp}>Logout</SidebarOption>
        </div>
    </div>
  )
}

export default Sidebar