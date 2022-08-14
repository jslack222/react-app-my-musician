import React from "react";
import PostsThree from "./PostsThree";
import "./Home.css"

const Home = () => {
  return (
    <div className="Home-div">
        <div className="home-header-container">
          <div className="home-header-card">
            <h1>this is home-card</h1>
          </div>
        </div>
        <div className="home-post-container">
          <PostsThree></PostsThree>
        </div>
    </div>
  );
};

export default Home;
