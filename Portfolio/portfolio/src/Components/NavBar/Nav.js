import React from "react"
import Logo from "./LOGO.png"
import "./NavStyle.css"
import logo from "../../Images/NavLogo.png"

const Nav = () => {
    
    
    return(
        <div className='navbarContainer'>
            <div className='Hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <div className='navlogo'>
                <span>
                    <img src={logo}></img>
                </span>
            </div>
            <div className='navListWraper'>
                <ul className='navlistitem'>
                    <li className='NavlinkItem'>
                        <a href='#introPageID'>HOME</a>
                    </li>
                    <li className='NavlinkItem'>
                        <a href='#resumePageID'>RESUME</a>
                    </li>
                    <li className='NavlinkItem'>PROJECTS</li>
                    <li className='NavlinkItem'>CONTACT</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;