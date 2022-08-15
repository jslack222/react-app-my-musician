import React from 'react'

const AboutCard = (props) => {
  return (
    props.trigger && (
      <div className="post-outer-two">
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">About</h1>
          </div>
        </div>
        <div className="post-inner">{props.children}</div>
      </div>
    )
  );
};
export default AboutCard; 