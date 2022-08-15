 import React from 'react'

const NewsCard = (props) => {
  console.log(props.img)
  return (
    <div className="newscard-outer">
      <div className="news-card-inner">
        <h1 className="news-title">{props.title}</h1>
      </div>
      <div className="new-info-con">
        <p className="news-description">{props.description}</p>
        <a href={props.url} className="news-url">Continue Reading...</a>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}


export default NewsCard; 
     