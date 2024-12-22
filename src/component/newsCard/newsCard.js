import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
  const fullDate=new Date(newsItem.publishedAt);
  var date=fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour>=12?true:false

  return (
    <div className='newsDiv'>
      <img className="newsImage" alt={newsItem.title} src={newsItem.urlToImage?newsItem.urlToImage:"https://static.vecteezy.com/system/resources/previews/004/141/669/original/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"}></img>
      <div children='topNews'>
        <span className='newsTitle'>{newsItem.title}</span>
        <div className='newsAuthor'>
          <a target='__blank' href={newsItem.url} style={{color:"black",textDecoration:"none"}}>
            <b>short</b>
          </a>
          <span> by </span>
          <span>{newsItem.author?newsItem.author:"unknown"} / {" "}
            {
              time? `${hour-12}:${date[4].substring(3,5)} pm`
              : `${hour}:${date[4].substring(3,5)} am`
            } on {date[2]} {date[1]} {date[3]} {date[0]}
          </span>
          <span></span>
        </div>
        <div className='lowerNews'>
        <div className='newsContent'>
          {newsItem.description}
        </div>
        {newsItem.source.name && (<div className='readMore'>
          <a href={newsItem.url} className='url'>
          <span>Read more at </span>
          <span>
            {newsItem.source.name}
          </span>
          </a>
        </div>
        )}
        </div>
      </div>
    </div>
    )
}

export default NewsCard