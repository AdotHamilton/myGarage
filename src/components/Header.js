import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {GiMechanicGarage}  from "react-icons/gi";
import "./header.css";
import TextInput from './TextInput';
import SearchBar from './SearchBar';
const Header = props => {
    const {links, main} = props;
    const handleSearch = () => {

    }
return (
    <div id="header_row">
        <div id="logo"><GiMechanicGarage /><span>myGarage</span></div>

        {
                main ?
                 <div id="header_search">
                    <SearchBar />
                 </div>

                : <></>
        }
        <div id="nav_section">
            { links ?
                links.map((link, key) => {
                   return <span className="nav_link" key={key}><a href={link.url}>{link.label}</a></span>
                }) : ""
            }

            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    </div>
  )
}

export default Header;