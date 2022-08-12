import React from 'react' 
import {useState, useEffect} from 'react'
import axios from 'axios'
import PostRender from './post-render'

const PostsTwo = (props) => {
    const [postRender, setPostRender] = useState([]); 
    useEffect(() => {
        axios.get("/post")
            .then((res) => {
            setPostRender(res.data)
        })
    }, [props.input])
    console.log(postRender)

    const postDisplay = postRender.map(post => {
        return <PostRender post={post}></PostRender>
    })

    return (
      props.trigger && (
        <div className="post-outer-two">
            <div className="post-inner-two">
                    {props.children}
                    {postDisplay}
                </div>
                
        </div>
    ))
 
}
export default PostsTwo; 
