import { useState } from "react";
import logoutIcon from "../../assets/img/logout.png"
import { Link } from "react-router-dom"
import "./logout.css"

const PopupLog = (props) => {

  
  return (
    props.trigger && (
      <div className="logout-container">
        <div className="logout-inner">
          <button onClick={() => props.setTrigger(false)} className="close-btn-logout">
            X
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};
export default PopupLog
