import React from "react"

import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='navbarcontainer'>
            <div className='navbarlogo'>
                <h1>LOGO</h1>
            </div>
            <a href='#' className='toggle-button'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            <div className='navlistcontainer'>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>RESUME</a></li>
                    <li><a>PROJECT</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;