import React from 'react'
import axiosInstance from '../axios'
import Button from '@material-ui/core/Button';

import guardian from "../Images/guardian.jpg"
import conversation from "../Images/conversation.jpg"
import sports from "../Images/sports.jpg"
import finance from "../Images/finance.jpg"
import politics from "../Images/politics.jpg"
import technology from "../Images/technology.jpg"

const MyAccount = () => {


    const [followedCategories, SetFollowedCategories] = React.useState([])
    const [followedNewsOrgs, setFollowedNewsOrgs] = React.useState([])


    const fetchData = () => {
        axiosInstance
            .get("/profile")
            .then(res => {
                SetFollowedCategories(res.data.follow_category_list)
                setFollowedNewsOrgs(res.data.follow_news_org_list)

            })
    }

    React.useEffect(() => {
        fetchData()

    }, []);

    const handleFollow = (element_name) => {
        
        axiosInstance
            .patch("/profile/", { [element_name]: 1 })
            .then(res => {
                SetFollowedCategories(res.data.follow_category_list)
                setFollowedNewsOrgs(res.data.follow_news_org_list)

            })
    }



    return (
        <div>

            <h3>News to follow</h3>
            <div className="account-container">

                <div className="news_org">
                    <img className="news_org_img" src={guardian} />
                    <div className="follow_button" key='The Guardian'>
                        {followedNewsOrgs.includes("The Guardian") ? <UnFollowButton name={"The Guardian"} handleFollow={handleFollow}/> : <FollowButton name={"The Guardian"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="news_org">
                    <img className="news_org_img" src={conversation} />
                    <div className="follow_button">
                    {followedNewsOrgs.includes("The Conversation") ? <UnFollowButton name={"The Conversation"} handleFollow={handleFollow}/> : <FollowButton name={"The Conversation"} handleFollow={handleFollow}/>}
                    </div>
                </div>
            </div>
            <div className="account-container">

                <div className="topic">
                    <img className="topic_img" src={sports} />
                    <div className="follow_button">
                        {followedCategories.includes("Sports") ? <UnFollowButton name={"Sports"} handleFollow={handleFollow}/> : <FollowButton name={"Sports"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <img className="topic_img" src={finance} />
                    <div className="follow_button">
                    {followedCategories.includes("Finance") ? <UnFollowButton name={"Finance"} handleFollow={handleFollow}/> : <FollowButton name={"Finance"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <img className="topic_img" src={politics} />
                    <div className="follow_button">
                    {followedCategories.includes("Politics") ? <UnFollowButton name={"Politics"} handleFollow={handleFollow}/> : <FollowButton name={"Politics"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <img className="topic_img" src={technology} />
                    <div className="follow_button">
                    {followedCategories.includes("Technology") ? <UnFollowButton name={"Technology"} handleFollow={handleFollow}/> : <FollowButton name={"Technology"} handleFollow={handleFollow}/>}
                    </div>
                </div>
            </div>
        </div>



    )
}

const FollowButton = (props) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            onClick = {() => props.handleFollow(props.name)}
        >
            Follow
        </Button>
    )
}

const UnFollowButton = (props) => {
    return (
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {() => props.handleFollow(props.name)}
        >
            Following
        </Button>
    )
}

export default MyAccount