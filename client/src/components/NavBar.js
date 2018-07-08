import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'



const NavBar = () => {
  return(
  <div className="navbar-container">
    <NavLink
     className="navbar-item"
      to="/concerts/new"
      >Add a New Setlist</NavLink>

    <NavLink
    className="navbar-item"
      to="/concerts"

      >View Concerts</NavLink>

    </div>
    )
  }

export default NavBar;
