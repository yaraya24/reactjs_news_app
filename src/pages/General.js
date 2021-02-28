import React from 'react'
import NewsCardComponent from '../components/NewsCard';
import axiosInstance from '../axios';
import InfiniteScroll from "react-infinite-scroll-component";




const GeneralPage = () => {

    

    const [articles, setArticles] = React.useState([])
    const [hasMore, setHasMore] = React.useState(true)
    const [items, setItmes] = React.useState(15)
    const [offset, setOffset] = React.useState(0)
    
    
    const fetchData = () => {
        axiosInstance
        .get("/?offset=" + offset)
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
            return (
                <NewsCardComponent id={item.id} story={item} />
                )
        })}
        </InfiniteScroll>
        
       
    )
}

export default GeneralPage