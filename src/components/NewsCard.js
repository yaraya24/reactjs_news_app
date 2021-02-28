import React from 'react'


const NewsCardComponent = ({ story }) => {
    
    return (
        
        <div className="news-card-container">
            
            <div className="news-card-article-info">

                <span className="article-heading">{story.heading}</span>
                <p>{story.snippet}</p>
                <p>{story.author}</p>
                <p>{story.publish_date}</p>

            </div>
            <img className="article-image" src={story.image_source}></img>
       
        </div>
      
     

    )
}

export default NewsCardComponent