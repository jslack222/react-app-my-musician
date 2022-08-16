 import React from 'react'

const NewsCard = (props) => {
  console.log(props.published_at)
  return (
    <div className="newscard-outer">
      <div className="news-card-inner">
        <h1 className="news-title">{props.title}</h1>
      </div>
      <div className="new-info-con">
        <p className="news-description">
          {props.description}
          <a href={props.url} target="_blank"className="news-url">
            <span className="see-more">See More</span>
          </a>
        </p>
        <img className="news-pic"src={props.img} alt="" />
      </div>
    </div>
  );
}


export default NewsCard; 
     