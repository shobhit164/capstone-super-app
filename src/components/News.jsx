import React from 'react'
import newsCss from '../styles/news.module.css'
import image from '../assets/Thriller.png'

function News({date, hour, minute, ampm, title, description, img}) {
  return (
    <div className={newsCss.news}>
      <div className={newsCss.img_time}>

        <img src={img} alt="" />

        <div className={newsCss.strip}>
          <h2>{title}</h2>
          <p className={newsCss.time}>
            {date} | {hour}:{minute} {ampm}
          </p>
        </div>
      </div>
      
      <div className={newsCss.text}>
        {description} 
      </div>
    </div>
  )
}

export default News
