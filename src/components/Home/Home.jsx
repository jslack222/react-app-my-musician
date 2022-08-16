import { useEffect, useState } from "react";
import React from 'react'
import PostsThree from "./PostsThree";
import "./Home.css"
import NewsCard from "./NewsCard"
import axios from "axios";


const Home = () => {
   const [newsRender, setNewsRender] = useState([])

  useEffect(() => {
     axios.get("/getnews")
       .then((res) => {
       setNewsRender(res.data)
     })
      }, []);
      console.log(newsRender);

  const newsDisplay = newsRender.map((news) => {
    console.log(news.image)
    return (
      <NewsCard
        title={news.title}
        img={news.image}
        description={news.description}
        url={news.url}
        time={news.published_at}
      />
    );
      });

  return (
    <div className="Home-div">
      <div className="posts-two-master">
        <div className="posts-two-block-3">
          <h1 className="posts-two-heading">Hot News</h1>
        </div>
      </div>
      <div className="home-header-container">
        <div className="home-header-card">{newsDisplay}</div>
      </div>
      <div className="home-post-container">
        <div className="posts-two-master">
          <div className="posts-two-block-1">
            <h1 className="posts-two-heading">Posts</h1>
          </div>
        </div>
        <PostsThree></PostsThree>
      </div>
    </div>
  );
};

export default Home;
