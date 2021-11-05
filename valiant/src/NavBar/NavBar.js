import React from 'react'
import './NavBar.css'


const NavBar = () => {
    
    return(
        <nav>
            <div className='NavBarLogo'><h4>VALIANT</h4></div>
            <div className='NavBarLogo'><h4>LOGO</h4></div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="nav-links">
                <li><a href="#About">ABOUT</a></li>
                
                <li><a href="#Project">PROJECTS</a></li>
                
                <li><a href="#Project">ARCHITECTS</a></li>

                <li><a href="#Contact">CONTACT</a></li>
            </ul>
        </nav>
    )
}
export default NavBar