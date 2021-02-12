import React from 'react';

const SideNavBarComponent= (props) => {

    const sidenavbarstyles = {
        transform: 'translateX(-100%)'
      }
    
    return (
        <div style={!props.navbarOpen ? sidenavbarstyles : null} className="side-nav-bar-container">
        <a href="#">
        General
        </a>
        <a href="#">
        World News
        </a>
      <a href='#'>
        Politics
        </a>
        <a href='#'>
        Sports
        </a>
        <a href='#'>
        Business
        </a>
        <a href='#'>
        Culture
        </a>
        
        
        </div>
    )
}

export default SideNavBarComponent 