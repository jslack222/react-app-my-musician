import React from 'react'
import profile from "../../assets/img/profile.jpg"
import "./Profile.css"
import CoverImg from "../../assets/img/cover-img.jpg"
import {Link} from 'react-router-dom'
import { useState } from "react"
import Posts from './mypost'
import AboutCard from './about'
import MyMusic from './mymusic'


const Profile = (props) => {
  const [postCard, setPostCard] = useState(true); 
  const [aboutCard, setAboutCard] = useState(false); 
  const [musicCard, setMusicCard] = useState(false); 
  
  const truePost = () => setPostCard(true)
  const noAbout = () => setAboutCard(false); 
  const noMusic = () => setMusicCard(false);
  const noPost = () => setPostCard(false); 
  const trueAbout = () => setAboutCard(true); 
  const trueMusic = () => setMusicCard(true); 

  

  return (
    <div className="profile-outer-div">
      <div className="profile-inner-div">
        <div className="img-cover-container">
          <img className="cover-img" src={CoverImg} alt="" />
        </div>
        <div className="outershell">
          <div className="profile-heading">
            <img src={profile} className="pp-icon" alt="" />
            <h1 className="profile-name">Jonathan Slack</h1>
            <div className="edit-con">
              <button className="edit-profile">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="space-two"></div>
        <hr className="line" />
        <div className="info-section">
          <div className="info-container">
            <div className="mini-nav">
              <ul className="mini-list">
                <li className="mini-li">
                  <span
                    className="mini-links"
                    onClick={() => {
                      noMusic();
                      noAbout();
                      truePost();
                    }}
                  >
                    Posts
                  </span>
                </li>
                <li className="mini-li">
                  <span
                    className="mini-links"
                    onClick={() => {
                      noMusic();
                      trueAbout();
                      noPost();
                    }}
                  >
                    About
                  </span>
                </li>
                <li className="mini-li">
                  <span
                    className="mini-links"
                    onClick={() => {
                      trueMusic();
                      noAbout();
                      noPost();
                    }}
                  >
                    Music
                  </span>
                </li>
              </ul>
              <div className="links-body">
                <div className="links-inner-body">
                  <Posts trigger={postCard} setTrigger={setPostCard}>
                    <div className="post-card-inner">
                      <h3 className="profile-create">Create Post</h3>
                      <div className="name-heading">
                        <p className="profile-name">
                          <Link to="/myprofile">
                            <img
                              className="profile-pic-post"
                              src={profile}
                              alt=""
                            ></img>
                          </Link>
                          Jonathan Slack
                        </p>
                      </div>
                      <div className="post-profile-wrap">
                        <textarea
                          rows="4"
                          className="post-content"
                          placeholder="What is on your mind?"
                        />
                      </div>
                    </div>
                  </Posts>
                  <AboutCard trigger={aboutCard} setTrigger={setAboutCard}>
                    <h1>This is the about component</h1>
                  </AboutCard>
                  <MyMusic trigger={musicCard} setTrigger={setMusicCard}>
                    <h1>This is the music component</h1>
                  </MyMusic>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Profile; 

//localStorage.getItem
//do an axios call in the compoenent that you want to pass the info too.
//useParams from react router dom from pikachu demo
//save information to state 