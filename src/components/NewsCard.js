import React from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineSave } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs'
import axiosInstance from "../axios"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'


const NewsCardComponent = ({ story, isSavePage, RemoveSavedArticle }) => {
    const [article, setArticle] = React.useState(story)
    const history = useHistory();

    const handleLike = (e) => {
        axiosInstance
            .patch('/' + story.id + '/', { "like": 1 })
            .then((res) => {
                console.log(res)
                setArticle(res.data)
            },
                (error) => {
                    console.log(error)
                    console.log(error.response)
                    if (error.response.status === 403) {
                        history.push('/login')
                        toast.warn("Login is required")
                    }

                }
            )


    }

    const handleSave = () => {
        axiosInstance
            .patch('/' + story.id + '/', { "save": 1 })
            .then((res) => {
                console.log(res)
                setArticle(res.data)
                toast.success("Article has been saved")

            },
                (error) => {
                    console.log(error)
                    console.log(error.response)
                    if (error.response.status === 403) {
                        history.push('/login')
                        toast.warn("Login is required")
                    }

                }
            )
    }

    const handleRemoveSave = () => {
        console.log(article.id)
        axiosInstance
            .delete('/saved/del/' + article.id)
            .then((res) => {

                RemoveSavedArticle(article.id)
            },
                (error) => {
                    console.log(error.response)
                })
    }

    return (

        <div className="news-card-container">

            <div className="news-card-article-info">

                <strong className="article-heading"><a href={article.article_address} >{article.heading}</a></strong>
                <div className="date-author-container">
                    <div className="pub-date">{article.published_date}</div>
                    <div className="author">{story.author}</div>

                </div>
                <div className="source">{story.news_organisation}</div>
                <p className="snippet">{article.snippet}</p>
                <div className="news-actions">
                    <div className="like_svg" onClick={() => handleLike()}>
                        {article.liked_by_user ? <AiFillHeart /> : <AiOutlineHeart />}
                    </div>
                    <div className="total_like_count">{article.liked_count}</div>
                    <div className="save_svg">
                        {article.saved_by_user ? null : <AiOutlineSave onClick={() => handleSave()} />}
                    </div>
                    {isSavePage ? <BsTrash onClick={() => handleRemoveSave()} /> : null}
                </div>

            </div>
            <img className="article-image" src={article.image_source}></img>

        </div>



    )
}

export default NewsCardComponent