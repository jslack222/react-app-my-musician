import React from 'react'; 
import { Link } from 'react-router-dom'
import userIcon from "../../assets/img/userIcon.png";
import Login from "../Login/login"
import Popup from "../Popup/popup"
import { useState } from 'react'
import Navbar from './Navbar'


const Header = () => {
     const [buttonPopup, setButtonPopup] = useState(false);
    
    return (
      <header>
        {/* Need to render as tenary saying if login is true then this below won't render */}
        <Navbar/>
      </header>
    );
}

export default Header; 