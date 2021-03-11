import React from 'react'
import NewsCardComponent from '../components/NewsCard';
import axiosInstance from '../axios';
import InfiniteScroll from "react-infinite-scroll-component";




const BusinessPage = () => {



    const [articles, setArticles] = React.useState([])
    const [hasMore, setHasMore] = React.useState(true)
    const [offset, setOffset] = React.useState(0)

    const fetchData = () => {
        axiosInstance
            .get("business/?offset=" + offset)
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
            }, (error) => {
                if (error) {
                    if (error.response.status === 403 || error.response.status === 401) {
                        localStorage.removeItem('access_token')
                        window.location.href = '/business'

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
                    <NewsCardComponent key={item.id} story={item} />
                )
            })}
        </InfiniteScroll>


    )
}

export default BusinessPage