import React from 'react';
import { NavLink } from "react-router-dom"

const SideNavBarComponent= (props) => {

    const sidenavbarstyles = {
        transform: 'translateX(-100%)'
      }

      const nav_items = [
        {
          id: 1,
          path: "/",
          name : "General"
        },
        {
          id: 2,
          path: "/World",
          name : "World",
        },
        {
          id: 3,
          path: "/Politics",
          name: "Politics"
        },
        {
          id: 4,
          path: "/Sports",
          name: "Sports"
        },
        {
          id: 5,
          path: "/Business",
          name: "Business"
        },
        {
          id: 6,
          path: "/Culture",
          name: "Culture"
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