import React from 'react' 

const MyMusic = (props) => {
    return (
      props.trigger && (
        <div className="post-outer">
                <div className="post-inner">
                    {props.children}
                </div>
        </div>
      )
    );
}
export default MyMusic; 