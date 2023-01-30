import './Footer.css'
import logo from "../logoFooter.png"

function Footer() {
    return(
        <div className='footer'>
        <img src={logo} alt='Logo Kasa' className='footerLogo'></img>
        <p className='footerText'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer