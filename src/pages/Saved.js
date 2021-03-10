import React from 'react'
import NewsCardComponent from '../components/NewsCard';
import axiosInstance from '../axios';
import InfiniteScroll from "react-infinite-scroll-component";
import {toast} from 'react-toastify'


const SavedPage = () => {
    const [articles, setArticles] = React.useState([])
    const [hasMore, setHasMore] = React.useState(true)
    const [offset, setOffset] = React.useState(0)
    const [removedSave, setRemovedSave] = React.useState([])

    const fetchData = () => {
        axiosInstance
        .get("/saved?offset=" + offset)
        .then(res => {
            if (res.data) {
                setArticles(articles => articles.concat(res.data.results))
                
                if (res.data.next) {
                    
                    setHasMore(true)
                    setOffset(offset + 10)
                   
                }
                else {
                    setHasMore(false)

                }
                
            }
        },(error) => {
            if (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    localStorage.removeItem('access_token')
                    window.location.href = '/login'
                    toast.warn("Login is required")
                }
            }
            
        })
    }

    const RemoveSavedArticle = (removeID) => {
        setRemovedSave(prev => prev.concat(removeID))
    }

    React.useEffect(() => {
        
        fetchData() 
    }, [])


    return (

        <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold={0.95}
        loader={<h4>Loading...</h4>}>
            
        {articles.map((item) => {
            if (!removedSave.includes(item.id)) {
            return (
                <NewsCardComponent RemoveSavedArticle={RemoveSavedArticle} id={item.id} story={item} isSavePage={true}/>
                )
            }
        })}
        </InfiniteScroll>

    )
}

export default SavedPage