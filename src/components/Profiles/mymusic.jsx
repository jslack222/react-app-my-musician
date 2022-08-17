import React from 'react' 
import Spotify from "../Music/Spotify"
import "../Music/Music.css"

const MyMusic = (props) => {
    return (
      props.trigger && (
        <div className="post-outer-two">
          <div className="posts-two-master">
            <div className="posts-two-block-1">
              <h1 className="posts-two-heading">My Music</h1>
            </div>
          </div>
          <div className="space-music"></div>
          <div className="music-block-inner">
            <Spotify link="https://open.spotify.com/playlist/3ZjiTknpJcXo16KX2raZ1O?si=51c616e5c6e04c99"></Spotify>
          </div>
        </div>
      )
    );
}
export default MyMusic; 