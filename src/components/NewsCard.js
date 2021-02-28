import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axiosInstance from "../axios"

const NewsCardComponent = ({ story }) => {
    const [likeStatus, setLikeStatus] = React.useState(story.liked_by_user)

    const handleLike = (e) => {
        axiosInstance   
            .patch('/' + story.id + '/', {"like": 1})
            .then((res) => {
                console.log(res)
                setLikeStatus((prev) => {
                    return !prev
                })
            },
            (error) => {
                console.log(error)
                console.log(error.response)
                
            }
            )
            

    }
    
    return (
        
        <div className="news-card-container">
            
            <div className="news-card-article-info">

                <strong className="article-heading">{story.heading}</strong>
                <p>{story.published_date}{story.author}</p>
                <p className="snippet">{story.snippet}</p>
                <div className="icons" onClick={() => handleLike()}>
                    {likeStatus ? <AiFillHeart/> : <AiOutlineHeart/>}
                </div>
                

            </div>
            <img className="article-image" src={story.image_source}></img>
       
        </div>
      
     

    )
}

export default NewsCardComponent