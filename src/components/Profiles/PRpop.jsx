import React from 'react'
import "./PRpop.css"

const RenderPop = (props) => {
    return (
      props.trigger && (
        <div className="bullet-master">
          <div className="bullet-child-1">
            <button className="edit-post">
              <img src="" alt="pencil-icon" />
              Edit Post
            </button>
          </div>
          <div className="bullet-child-2">
            <button className="delete-post">
              <img src="" alt="trash-icon" />
              Delete Post
            </button>
          </div>
        </div>
      )
    );
}
export default RenderPop; 