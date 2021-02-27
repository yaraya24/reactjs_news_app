import React from 'react'
import axiosInstance from '../axios'

const MyAccount = () => {
    React.useEffect(() => {
        axiosInstance
            .get("profile")
            .then((res) => {
                console.log(res.data)
            })
    },[])

    return (
        <div>
            Hello this is my account
        </div>
    )
}

export default MyAccount