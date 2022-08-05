import React from 'react' 
import './Create.css'

const CreateCard = (props) => {
    return (
      props.trigger && (
        <div className="CreateCard">
          <div className="CardContainer">
            <button
              onClick={() => props.setTrigger(false)}
              className="post-Cbutton">X</button>
            {props.children}
          </div>
        </div>
      )
    );

}
export default CreateCard; 