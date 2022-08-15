import React from 'react'
import "./PRpop.css"
import pencil from '../../assets/img/pencil-white.png'
import trash from '../../assets/img/trash-white.png'
import axios from 'axios'
import {useState} from 'react'



const RenderPop = (props) => {
  const [comment_char, setComment_char] = useState();

  const handleDelete = async(e) => {
    e.preventDefault()
    axios
      .delete(`/deletepost/${props.id}`)
      .then((res) => {
        localStorage.removeItem("post");
        console.log("is this working");
        props.toGetPosts();
        props.setRenderThat(false);
      })
      .catch((err) => {
        console.log(err);
      });

    }
  
  return (
    props.trigger && (
      <div className="bullet-master">
        <div className="bullet-child-global">
          <div className="bullet-child-1">
            <button className="edit-post">
              <img className="pencil-icon" src={pencil} alt="pencil-icon" />
              Edit Post
            </button>
          </div>
          <div className="bullet-child-2">
            <button onClick={handleDelete} className="delete-post">
              <img className="trash-icon" src={trash} alt="trash-icon" />
              Delete Post
            </button>
          </div>
        </div>
      </div>
    )
  );
}
export default RenderPop; 