import Logo from './Logo'
import Nav from './Navbar.js'
import './Header.css'

function Header() {
    return (
        <div className='nav'>
        <Logo />
        <Nav />
        </div>
    )
}
export default Header