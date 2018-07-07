import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '80px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
}


const NavBar = () => {
  return(
  <div className="navbar">
    <NavLink
      to="/concerts/new"
      exact
      style={link}
      activeStyle={{
        background: "white"
      }}
      >Add a New Setlist</NavLink>
    <NavLink
      to="/concerts"
      exact
      style={link}
      activeStyle={{
        background: "white"
      }}
      >View Concerts</NavLink>
    
    </div>
    )
  }

export default NavBar;
