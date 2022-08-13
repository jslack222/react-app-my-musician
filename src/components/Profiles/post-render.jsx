import React from 'react'
import profile from "../../assets/img/profile.jpg";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./post-render.css"
import RenderPop from './PRpop'

const PostRender = (props) => {
    const [createPopup, setCreatePopup] = useState(false)
  const [renderthat, setRenderThat] = useState(false);
  
    console.log(props)
    return (
      <div className="post-render-master">
        <RenderPop trigger={renderthat} setTrigger={setRenderThat}></RenderPop>
        <div className="post-render-inner">
          <div className="manage-post-container">
            <span
              onClick={() => setRenderThat(!renderthat)}
              className="manage-post-button"
            >
              ...
            </span>
          </div>
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