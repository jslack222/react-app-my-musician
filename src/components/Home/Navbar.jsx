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
import axios from 'axios'



const Navbar = (props) => {

  const linkStyle = {
     
    
  }
  const [btnpop, SetBtnpop] = useState(false)
  const [buttonPopup, setButtonPopup] = useState(false);
  const [createPopup, setCreatePopup] = useState(false);
  const [comment_char, setComment_char] = useState("");
  const [signuperr, setSignuperr] = useState(false);
  const [input, setInput] = useState(false)

  const postContent = () => setCreatePopup(!createPopup)
  const Test = () => alert("this works")
  const OpenPp = () => setButtonPopup(!buttonPopup)
  
  const validate = () => {
    const errors = {};
    if (comment_char === "") {
      errors.comment_char = setSignuperr(true);
      setButtonPopup(true);
    }
    return errors;
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    let errors = await validate();
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      axios
        .post("/myprofile", { comment_char })
        .then((res) => {
          localStorage.setItem("post", res.data[0].id);
          localStorage.setItem("comment_char", res.data[0].comment_char);
          setInput(!input);
          setCreatePopup(!createPopup);
          console.log(res.data);
        })
        .catch((err) => {
          setSignuperr(err);
        });
    }
  };
  

  return (
    <div className="global">
      {signuperr ? (
        <div className="login-error">
          <div className="error-inner">
            <img src="" alt="" />
            <h1 className="error-message">
              Please Enter in all required fields
            </h1>
            <p className="X" onClick={() => setSignuperr(false)}>
              Try Again
            </p>
          </div>
        </div>
      ) : null}
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
              onClick={() => SetBtnpop(!btnpop)}
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
      <PopupLog trigger={btnpop} setTrigger={SetBtnpop}>
        <div className="logout-wrap">
          <div className="profile-container">
            <Link onClick={() => SetBtnpop(!btnpop)} to="/myprofile">
              <button className="profile-btn">My Profile</button>
            </Link>
          </div>
          <div className="space"></div>
          <div className="btn-container">
            <button className="logout-btn">
              <img className="logout-img" src={logoutIcon} alt="" />
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
              <Link to="/myprofile">
                <img
                  onClick={() => setCreatePopup(!createPopup)}
                  className="profile-pic-post"
                  src={profile}
                  alt=""
                ></img>
              </Link>
              Jonathan Slack
            </p>
          </div>
          <form onSubmit={(e) => handleCreatePost(e)}>
            <div className="post-wrap">
              <textarea
                rows="12"
                className="post-content-1"
                placeholder="What is on your mind?"
                onChange={({ target }) => setComment_char(target.value)}
              />
            </div>
            <div className="post-button-container">
              <button className="post-btn">Post</button>
            </div>
          </form>
        </div>
      </CreateCard>
    </div>
  );
}
export default Navbar; 

// onClick={() => setButtonPopup(true)}