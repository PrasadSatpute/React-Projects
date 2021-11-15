import React from "react";

import './Header.css'

import LOGO from '../../Image/Valiant_Nav_Logo.png';


const Header = () => {


    return(


        <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
            
            <a class="navbar-brand" href="#"><img className='logo' src={LOGO}></img></a>
            <a class="navbar-brand" href="#">VALIANT</a>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#hero">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#about">ABOUT US</a></li>
                <li className="nav-item"><a className="nav-link" href="#services">SERVICES</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">PORTFOLIO</a></li>
                <li className="nav-item"><a className="nav-link" href="#team">TEAM</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">CONTACT US</a></li>
                </ul>
            </div>
        </nav>




        // <nav>

        //     <div className='NavBarLogo logotext'><h4>VALIANT</h4></div>
        //     <div className='NavBarLogo'><img className='logo' src=""></img></div>
        //     <div className="hamburger">
        //         <div className="line"></div>
        //         <div className="line"></div>
        //         <div className="line"></div>
        //     </div>

        //         <ul className="nav-links">
        //         <li><a href="#hero">Home</a></li>
        //         <li><a href="#about">About Us</a></li>
        //         <li><a href="#services">Services</a></li>
        //         <li><a href="#portfolio">Portfolio</a></li>
        //         <li><a href="#team">Team</a></li>
        //         <li><a href="#contact">Contact Us</a></li>
        //         </ul>
        // </nav>
    )
}

export default Header