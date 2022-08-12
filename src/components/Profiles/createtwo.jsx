import React from 'react' 

const CreateCardTwo = (props) => {
    return (
        props.trigger && (
             <div className="CreateCardTwo">
          <div className="CardContainerTwo">
            <button
              onClick={() => props.setTrigger(false)}
              className="post-Cbutton">X</button>
            {props.children}
          </div>
        </div>
    )
    )
}
export default CreateCardTwo; 