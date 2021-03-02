import React from 'react'
import NewsCardComponent from '../components/NewsCard';
import axiosInstance from '../axios';
import InfiniteScroll from "react-infinite-scroll-component";


const SavedPage = () => {
    const [articles, setArticles] = React.useState([])
    const [hasMore, setHasMore] = React.useState(true)
    const [offset, setOffset] = React.useState(0)
    const [removedSave, setRemovedSave] = React.useState(false)

    const fetchData = () => {
        axiosInstance
        .get("/saved?offset=" + offset)
        .then(res => {
            if (res.data) {
                // setMessages(state => [...state, newMessage])
                setArticles(articles => articles.concat(res.data.results))
                console.log(res.data.results)
                
                if (res.data.next) {
                    
                    setHasMore(true)
                    setOffset(offset + 10)
                   
                }
                else {
                    setHasMore(false)

                }
                
            }
        })
    }

    const RemoveSavedArticle = () => {
        console.log('aDWDA')
        setRemovedSave(prev => !prev)
    }

    React.useEffect(() => {
        setArticles([])
        fetchData() 
    }, [removedSave])


    return (

        <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={hasMore}
        scrollThreshold={0.95}
        loader={<h4>Loading...</h4>}>
            
        {articles.map((item) => {
            return (
                <NewsCardComponent RemoveSavedArticle={RemoveSavedArticle} id={item.id} story={item} isSavePage={true}/>
                )
        })}
        </InfiniteScroll>

    )
}

export default SavedPage