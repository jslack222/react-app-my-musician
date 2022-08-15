import { useEffect, useState } from 'react'
import axios from 'axios'
import PostRender from "../Profiles/post-render"

const PostsThree = (props) => {
    const [postRender, setPostRender] = useState([]);
     const toGetPostsTwo = () => {
       axios.get("/post").then((res) => {
           setPostRender(res.data);
           
       });
     };
    useEffect(() => {
       toGetPostsTwo()
    }, [props.input])
    console.log(postRender)

    const postDisplay = postRender.map(post => {
        return <PostRender post={post}></PostRender>
    })

    return (
            <div className="post-outer-two">
                <div className="post-inner-two">
                    {props.children}
                    {postDisplay}
                </div>
                
            </div>
        )
}
export default PostsThree; 