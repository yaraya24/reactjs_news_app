import React from 'react'
import axiosInstance from '../axios'
import Button from '@material-ui/core/Button';

import guardian from "../Images/guardian.jpg"
import conversation from "../Images/conversation.jpg"
import reuters from "../Images/reuters.jpg"
import npr from "../Images/npr.jpg"

const MyAccount = () => {


    const [followedCategories, SetFollowedCategories] = React.useState([])
    const [followedNewsOrgs, setFollowedNewsOrgs] = React.useState([])


    const fetchData = () => {
        // Axios call to get profile information on the user
        axiosInstance
            .get("/profile")
            .then(res => {
                SetFollowedCategories(res.data.follow_category_list)
                setFollowedNewsOrgs(res.data.follow_news_org_list)

            },(error) => {
                if (error) {
                    if (error.response.status === 403 || error.response.status === 401) {
                        localStorage.removeItem('access_token')
                        window.location.href = '/login'
                    }
                }
                
            })
    }

    React.useEffect(() => {
        fetchData()

    }, []);

    const handleFollow = (element_name) => {
        // Function that will update the follow status of a category or news organisation
        
        axiosInstance
            .patch("/profile/", { [element_name]: 1 })
            .then(res => {
                SetFollowedCategories(res.data.follow_category_list)
                setFollowedNewsOrgs(res.data.follow_news_org_list)

            })
    }



    return (
        <div>
            <div className="account-heading">
            <h2>News to follow</h2>
            </div>
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
                <div className="news_org">
                    <img className="news_org_img" src={reuters} />
                    <div className="follow_button">
                    {followedNewsOrgs.includes("Reuters") ? <UnFollowButton name={"Reuters"} handleFollow={handleFollow}/> : <FollowButton name={"Reuters"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="news_org">
                    <img className="news_org_img" src={npr} />
                    <div className="follow_button">
                    {followedNewsOrgs.includes("NPR") ? <UnFollowButton name={"NPR"} handleFollow={handleFollow}/> : <FollowButton name={"NPR"} handleFollow={handleFollow}/>}
                    </div>
                </div>
            </div>
            <div className="account-heading">
            <h2>Topics to follow</h2>
            </div>
            <div className="account-container">
                

                <div className="topic">
                    <block>Sports</block>
                    <div className="follow_button">
                        {followedCategories.includes("Sports") ? <UnFollowButton name={"Sports"} handleFollow={handleFollow}/> : <FollowButton name={"Sports"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <block>Business</block>
                    <div className="follow_button">
                    {followedCategories.includes("Business") ? <UnFollowButton name={"Business"} handleFollow={handleFollow}/> : <FollowButton name={"Business"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <block>Culture</block>
                    <div className="follow_button">
                    {followedCategories.includes("Culture") ? <UnFollowButton name={"Culture"} handleFollow={handleFollow}/> : <FollowButton name={"Culture"} handleFollow={handleFollow}/>}
                    </div>
                </div>
                <div className="topic">
                    <block>Technology</block>
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