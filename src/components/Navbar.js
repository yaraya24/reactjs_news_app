import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useHistory} from "react-router-dom"




const NavBarComponent = (props) => {

    const handleSideBar = () => {
        props.setNavbarOpen(props.navbarOpen)
    }

    const logged_in_nav = (

        <ul>
        <li onClick={() => props.handleLogout()}>logout</li>
        <li> <Link to="/myaccount">My Profile</Link></li>
        </ul>
    )

    const logged_out_nav = (
        <ul>
        <li ><Link to="/login">Login</Link></li>
        <li ><Link to='/register'>Sign Up</Link></li>
        
        </ul>
    )

    

return (
    <div className="nav-bar-container">
        <GiHamburgerMenu className="hamburger-svg" onClick={handleSideBar} />
        <div className="nav-bar-logo">uBROKE NEWS</div>
        <SearchBarComponent searchHandle={props.searchHandle}/>
       
       <div>{props.loginStatus ? logged_in_nav : logged_out_nav}</div>;
        
    </div>


)
}

const SearchBarComponent = (props) => {

    const [searchTerm, setSearchTerm] = React.useState('')
    const history = useHistory();

    const searchChangeHandle = event => {
        setSearchTerm(event.target.value)
    }

    const searchSubmitHandle = event => {
        if (event.keyCode === 13) {
            props.searchHandle(searchTerm)
            history.push('/search')
        }
    }

    const submitSearchByClick = () => {
        props.searchHandle(searchTerm)
        history.push('/search')
    }

    return (
        <div className="search-container">
            
            <input type="text" placeholder="Search" className="nav-bar-search" value={searchTerm} onChange={searchChangeHandle} onKeyDown={(e) => searchSubmitHandle(e) }></input>
            {searchTerm &&
                <FaSearch className="search-svg" onClick={() => submitSearchByClick()}/>
            }


        </div>
    )
}

export default NavBarComponent