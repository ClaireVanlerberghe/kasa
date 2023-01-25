import logo from '../logo.png';
import '../styles/Banner.css';
import { Link } from "react-router-dom";


function Banner() {
    return (
<nav className="nav">
    <Link to="/">
    <img src={logo} className="Nav-logo" alt="logo kasa" />
    </Link>
    <div>
        <Link className="nav-link" to="/">
            Accueil
        </Link>
        <Link className="nav-link" to="/"> 
            A propos
        </Link>
    </div>
    </nav>
    )
}
export default Banner