import React from "react";


const Hero = () => {
    return(
        <section id="hero">
            <div className="hero-container">
            <h1>Welcome to VALIANT</h1>
            <h2>REAL-ESTATE AND CONSTRUCTIONS</h2>
            <h3>We are team of talanted designers making Great things</h3>
            <h3 class="typewrite" data-period="2000" data-type='[ "Welcome to VALIANT", "We are Creative.", "We Love Design.", "We Love to Develop." ]'>
                <span class="wrap"></span>
            </h3>
            <a href="#about" className="btn-get-started">EXPLORE US</a>
            </div>
        </section>
    )
}

export default Hero