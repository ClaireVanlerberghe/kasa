import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'


function Nav() {
    return (
   
        <nav className="navLink">
             <NavLink to="/" className="accueil-nav">
            Accueil
        </NavLink>
        <NavLink to="/about" className="about-nav"> 
            A propos
        </NavLink>
        </nav>
       
    )
}

export default Nav