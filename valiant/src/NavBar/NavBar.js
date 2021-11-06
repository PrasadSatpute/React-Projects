import React from 'react'
import './NavBar.css'

import LOGO from '../Image/Valiant_Nav_Logo.png';


const NavBar = () => {
    
    return(
        <nav>
            <div className='NavBarLogo logotext'><h4>VALIANT</h4></div>
            <div className='NavBarLogo'><img className='logo' src={LOGO}></img></div>
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><a href="#About">ABOUT</a></li>
                
                <li><a href="#Project">PROJECTS</a></li>
                
                <li><a href="#Project">ARCHITECTS</a></li>

                <li><a href="#Contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default NavBar