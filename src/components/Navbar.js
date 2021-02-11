import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'

const NavBarComponent = () => {

    return (
        <div className="nav-bar-container">
        <div  className="nav-bar-logo">uBROKE NEWS</div>
        
        <SearchBarComponent/>
        
        <strong>log in</strong>
        <strong>sign up</strong>
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
        <GiCancel className="search-cancel-svg"/>
        }
        <FaSearch className="search-svg"/>
        
        </div>
    )
}

export default NavBarComponent