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
import CreateCard from '../Create/Create';
import ToolTips from '../Tooltips/Tooltips'

const Navbar = (props) => {

  const linkStyle = {
     
    
  }
  const [buttonPopup, setButtonPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);

  return (
    <div className="global">
      <Link className="brand-link" to="/">
        <img className="brand" src={whiteLogo} alt="home-icon" />
      </Link>
      <nav className="nav">
        <ul className="nav_menu">
          <li className="nav_item">
            <span
              style={linkStyle}
              onClick={() => setCreatePopup(!createPopup)}
            >
              <img src={plusIcon} className="plus" />
            </span>
          </li>
          <li className="nav_item">
            <Link className="nav_link" to="/music">
              <img className="music-icon" src={musicNote} alt="music-icon" />
            </Link>
          </li>
          <li className="nav_item">
            <Link
              id="friends-div"
              data-tooltip="Friends"
              className="nav_link"
              to="/friends"
            >
              <img
                src={peopleIcon}
                alt="friends-icon"
                className="friends-icon"
              />
            </Link>
          </li>
          <li className="nav_item">
            <span
              onClick={() => setButtonPopup(!buttonPopup)}
              className="profile-nav"
            >
              <img src={profile} alt="friends-icon" className="friends-icon" />
            </span>
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
            <Link onClick={() => setButtonPopup(!buttonPopup)} to="/myprofile">
              <button className="profile-btn">My Profile</button>
            </Link>
          </div>
          <div className="space"></div>
          <div className="btn-container">
            <button className="logout-btn">
              <img className="logout-img"src={logoutIcon} alt="" />
              <p>Logout</p>
            </button>
          </div>
        </div>
      </PopupLog>
      <CreateCard trigger={createPopup} setTrigger={setCreatePopup}>
        <div className="card-inner">
          <h3 className="heading-create">Create Post</h3>
          <div className="name-heading">
            <p className="profile-name">
              <img className="profile-pic-post" src={profile} alt=""></img>
              Jonathan Slack
            </p>
          </div>
          <div className="post-wrap">
            <textarea
              rows="12"
              className="post-content"
              placeholder="What is on your mind?"
            />
          </div>
          <div className="post-button-container">
            <button className="post-btn">Post</button>
          </div>
        </div>
      </CreateCard>
    </div>
  );
}
export default Navbar; 

// onClick={() => setButtonPopup(true)}