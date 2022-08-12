import React from 'react'


const Posts = (props) => {
    return (
    props.trigger && (
        <div className="post-outer">
            <div className="post-inner">
                {props.children}
            </div>
        </div>
    ))
}
export default Posts; 