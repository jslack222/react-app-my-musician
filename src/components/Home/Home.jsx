import React from 'react';
import PostRender from '../Profiles/post-render'
import PostsTwo from '../Profiles/mypost-2';


const Home = () => {
    return (
        <div className="Home-div">
            <main>
                <h1>this is home bitch</h1>

                <PostsTwo>
                    <div className="posts-two-master">
                        <div className="posts-two-block-1">
                            <h1 className="posts-two-heading">Posts</h1>
                        </div>
                    </div>
                </PostsTwo>
            </main>
        </div>
    )
}


export default Home; 