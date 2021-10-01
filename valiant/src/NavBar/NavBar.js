import React from 'react'
import './NavBar.css'


const NavBar = () => {
    
    return(
        <nav>
            <div className='NavBarLogo'><h4>LOGO</h4></div>
            <div class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <ul class="nav-links">
                <li><a href="#About">About</a></li>
                
                <li><a href="#Project">Project</a></li>

                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default NavBar