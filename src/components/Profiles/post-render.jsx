import React from 'react'
import profile from "../../assets/img/profile.jpg";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./post-render.css"

const PostRender = (props) => {
    const [createPopup, setCreatePopup] = useState(false)
    
    console.log(props)
    return (
      <div className="post-render-master">
        <div className="post-render-inner">
          <div className="name-heading-2">
            <p className="profile-name">
              <Link to="/myprofile">
                <img
                  onClick={() => setCreatePopup(!createPopup)}
                  className="profile-pic-post-2"
                  src={profile}
                  alt=""
                ></img>
              </Link>
              Jonathan Slack
            </p>
          </div>
          <p className="post-text">{props.post.comment_char}</p>
          <hr className="comment-line" />
          <div className="comment-section">
            <button className="like-btn">Like</button>
            <button className="comment-btn">Comment</button>
          </div>
        </div>
      </div>
    );
}
export default PostRender; 