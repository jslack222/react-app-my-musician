import React from 'react'
import Spotify from './Spotify'
import "./Music.css"

const Music = () => {
    return (
      <div className="musicContainer">
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">Latest Hits</h1>
          </div>
        </div>
        <div className="music-1">
          <Spotify link="https://open.spotify.com/playlist/0xXBZGcpQzI4YbYhS7wqY5?si=01082254858f46f7"></Spotify>
        </div>
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">Song of the Week</h1>
          </div>
        </div>
        <div className="music-1">
          <Spotify link="https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7?si=5b48069392c34e12"></Spotify>
        </div>
      </div>
    );
}
export default Music; 
