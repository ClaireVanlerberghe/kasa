import logo from '../logo.png';
import '../styles/Banner.css';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Banner() {
    return (
        <Router>
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
    </Router>
    )
}
export default Banner