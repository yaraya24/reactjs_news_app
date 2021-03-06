import React from 'react';
import { NavLink } from "react-router-dom"

const SideNavBarComponent= (props) => {

    const sidenavbarstyles = {
        transform: 'translateX(-100%)'
      }

      const nav_items = [
        {
          id: 1,
          path: "/myfeed",
          name : "My Feed"
        },

        {
          id: 2,
          path: "/",
          name : "Headlines"
        },
        {
          id: 3,
          path: "/business",
          name: "Business"
        },
        {
          id: 4,
          path: "/sports",
          name: "Sports"
        },
        {
          id: 5,
          path: "/culture",
          name: "Culture"
        },
        {
          id: 7,
          path: "/technology",
          name: "Technology"
        },
        {
          id: 8,
          path: "/saved",
          name : "Saved"
        },
        
      ]
    
    return (
        <div style={!props.navbarOpen ? sidenavbarstyles : null} className="side-nav-bar-container">
          {nav_items.map((item) => {
            return <a key={item.id}><NavLink to={item.path} activeClassName="active-link" exact>{item.name}</NavLink></a>
          })}
       
        
        </div>
    )
}

export default SideNavBarComponent 