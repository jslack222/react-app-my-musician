import React from 'react'; 
import whiteLogo from "../../assets/img/white-logo.png";
import { Link } from 'react-router-dom'
import musicNote from '../../assets/img/music-icon.png'
import peopleIcon from "../../assets/img/friends-icon.png";
import "./Navbar.css"
import styled from "styled-components"
import plusIcon from "../../assets/img/plus-icon.png"
import profile from "../../assets/img/profile.jpg"
import PopupLog from "../Popup/logout"
import {useState} from "react"
import logoutIcon from "../../assets/img/logout.png";

const Navbar = (props) => {

  const linkStyle = {
     
    
  }
  const [buttonPopup, setButtonPopup] = useState(false);
  
  return (
    <div className="global">
      <Link className="brand-link" to="/">
        <img className="brand" src={whiteLogo} alt="home-icon" />
      </Link>
      <nav className="nav">
        <ul className="nav_menu">
          <li className="nav_item">
            <Link style={linkStyle} to="/create">
              <img src={plusIcon} className="plus" />
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="/music">
              <img className="music-icon" src={musicNote} alt="music-icon" />
            </Link>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="/friends">
              <img
                src={peopleIcon}
                alt="friends-icon"
                className="friends-icon"
              />
            </Link>
          </li>
          <li className="nav_item">
            <Link
              onMouseOver={() => setButtonPopup(true)}
              className="nav_link"
              to="/myprofile"
            >
              <img src={profile} alt="friends-icon" className="friends-icon" />
            </Link>
          </li>
        </ul>
        <div className="nav__toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <PopupLog trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="logout-wrap">
          <div className="profile-container">
            <Link to="/myprofile">My Profile</Link>
          </div>
          <div className="btn-container">
            <button className="logout-btn">
              <img src={logoutIcon} alt="" /><p>Logout</p>
            </button>
          </div>
        </div>
      </PopupLog>
    </div>
  );
}
export default Navbar; 

// onClick={() => setButtonPopup(true)}