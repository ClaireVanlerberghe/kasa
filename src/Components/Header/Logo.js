import logo from '../../logo.png';
import './Logo.css'
import { BrowserRouter as  NavLink } from "react-router-dom";

function Logo() {
    return (
    
    <NavLink to="/">
    <img src={logo} className="Nav-logo" alt="logo kasa" />
    </NavLink>
    )
}
export default Logo