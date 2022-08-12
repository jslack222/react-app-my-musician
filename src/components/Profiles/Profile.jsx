import React from 'react'
import profile from "../../assets/img/profile.jpg"
import "./Profile.css"
import CoverImg from "../../assets/img/cover-img.jpg"
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react"
import Posts from './mypost'
import AboutCard from './about'
import MyMusic from './mymusic'
import CreateCardTwo from "./createtwo"
import PostsTwo from './mypost-2'
import axios from 'axios'


const Profile = (props) => {
  const [postCard, setPostCard] = useState(true);
  const [aboutCard, setAboutCard] = useState(false);
  const [musicCard, setMusicCard] = useState(false);
  const [userObject, setUserObject] = useState({})
  const [createPopup, setCreatePopup] = useState(false);
  const [comment_char, setComment_char] = useState(""); 
  const [signuperr, setSignuperr] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [input, setInput] = useState(false); 
  

  const truePost = () => setPostCard(true);
  const noAbout = () => setAboutCard(false);
  const noMusic = () => setMusicCard(false);
  const noPost = () => setPostCard(false);
  const trueAbout = () => setAboutCard(true);
  const trueMusic = () => setMusicCard(true);
  const postContent = () => setCreatePopup(!createPopup);


  const test = () => console.log("good job this works")

  const validate = () => {
    const errors = {};
    if (comment_char === "") {
      errors.comment_char = setSignuperr(true);
      setButtonPopup(true);
    }
    return errors;
  };

  const handleCreatePost = async(e) => {
     e.preventDefault()
    let errors = await validate();
    console.log(errors)
    if (Object.keys(errors).length === 0) {
      axios
        .post("/myprofile", {comment_char})
        .then((res) => {
          localStorage.setItem("post", res.data[0].id);
          localStorage.setItem("comment_char", res.data[0].comment_char);
          setInput(!input);
          console.log(res.data)
        })
        .catch((err) => {
          setSignuperr(err)
        });
    }
  }
  // useEffect(() => {
  // let user = localStorage.getItem("user_profile");
  //   if (!user) {
  //     console.log(user)
  //     let userObj = JSON.parse(user);
  //     setUserObject(userObj);
  //   }
  // }, [])

  return (
    <div className="profile-outer-div">
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
                      <div className="name-heading">
                        <p className="profile-name">
                          <Link to="/myprofile">
                            <img
                              className="profile-pic-post"
                              src={profile}
                              alt=""
                            ></img>
                          </Link>
                        </p>
                      </div>
                      <div className="post-profile-wrap">
                        <textarea
                          onClick={() => setCreatePopup(!createPopup)}
                          rows="1"
                          className="post-content"
                          placeholder="What's on your mind Jonathan?"
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
                  <PostsTwo input={input} trigger={postCard} setTrigger={setPostCard}>
                    <div className="posts-two-master">
                      <div className="posts-two-block-1">
                        <h1 className="posts-two-heading">Posts</h1>
                      </div>
                    </div>
                  </PostsTwo>
                  <CreateCardTwo
                    className="CreateCard2"
                    trigger={createPopup}
                    setTrigger={setCreatePopup}
                  >
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
                          <button
                            type="submit"
                            className="post-btn"
                          >
                            Post
                          </button>
                        </div>
                      </form>
                    </div>
                  </CreateCardTwo>
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