import { BrowserRouter as Router, NavLink } from "react-router-dom";
import './Navbar.css'


function Nav() {
    return (
        <Router>
        <div className="navLink">
             <NavLink className="accueil-nav" to="/">
            Accueil
        </NavLink>
        <NavLink className="about-nav" to="/About"> 
            A propos
        </NavLink>
        </div>
        </Router>
    )
}

export default Nav