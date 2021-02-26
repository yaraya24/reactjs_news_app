import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from "react-router-dom"



const NavBarComponent = (props) => {

    const handleSideBar = () => {
        props.setNavbarOpen(props.navbarOpen)
    }

    const logged_in_nav = (

        <ul>
        <li>logout</li>
        </ul>
    )

    const logged_out_nav = (
        <ul>
        <li ><Link to="/login">Login</Link></li>
        <li >Sign Up</li>
        </ul>
    )

    

return (
    <div className="nav-bar-container">
        <GiHamburgerMenu className="hamburger-svg" onClick={handleSideBar} />
        <div className="nav-bar-logo">uBROKE NEWS</div>

        <SearchBarComponent />
       <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
        
    </div>


)
}

const SearchBarComponent = () => {

    const [searchTerm, setSearchTerm] = React.useState('')

    const searchChangeHandle = event => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="search-container">
            <input type="text" placeholder="Search" className="nav-bar-search" value={searchTerm} onChange={searchChangeHandle}></input>
            {searchTerm &&
                <FaSearch className="search-svg" />
            }


        </div>
    )
}

export default NavBarComponent