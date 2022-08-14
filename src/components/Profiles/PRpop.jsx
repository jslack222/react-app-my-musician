import React from 'react'
import "./PRpop.css"
import pencil from '../../assets/img/pencil-white.png'
import trash from '../../assets/img/trash-white.png'

const RenderPop = (props) => {
    return (
      props.trigger && (
        <div className="bullet-master">
          <div className="bullet-child-1">
            <button className="edit-post">
              <img className="pencil-icon"src={pencil} alt="pencil-icon" />
              Edit Post
            </button>
          </div>
          <div className="bullet-child-2">
            <button className="delete-post">
              <img className="trash-icon"src={trash} alt="trash-icon" />
              Delete Post
            </button>
          </div>
        </div>
      )
    );
}
export default RenderPop; 