import { Link } from "react-router-dom";
import './Navbar.css'


function Nav() {
    return (
   
        <div className="navLink">
             <Link className="accueil-nav" to="/">
            Accueil
        </Link>
        <Link className="about-nav" to="/About"> 
            A propos
        </Link>
        </div>
       
    )
}

export default Nav