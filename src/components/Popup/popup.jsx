import './popup.css'
import React from 'react'

const Popup = (props) => {
    return props.trigger ? (
      <div className="popup">
        <div className="popup-inner">
          <button onClick={() => props.setTrigger(false)} className="close-btn">
            X
          </button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
}
export default Popup; 