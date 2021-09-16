import React from "react"
import "./NavStyle.css"

const Nav = () => {
    return(
        <div className='navbarContainer'>
            <ul className='navlistitem'>
                <li>HOME</li>
                <li>RESUME</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
}

export default Nav;