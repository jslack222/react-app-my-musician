import React from 'react'

const AboutCard = (props) => {
  return (
    props.trigger && (
      <div className="post-outer">
              <div className="post-inner">
                  {props.children}
              </div>
      </div>
    )
  );
};
export default AboutCard; 