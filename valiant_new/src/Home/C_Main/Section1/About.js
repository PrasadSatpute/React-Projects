import React from "react";

const About = () => {
    return(
        <section id="about">
            <div className="container">
                <div className="row about-container">

                <div className="col-lg-6 content order-lg-1 order-2">
                    <h2 className="title">Few Words About Us</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="icon-box wow fadeInUp">
                    <div className="icon"><i className="fa fa-shopping-bag"></i></div>
                    <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>

                    <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                    <div className="icon"><i className="fa fa-photo"></i></div>
                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>

                    <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon"><i className="fa fa-bar-chart"></i></div>
                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>

                </div>

                <div className="col-lg-6 background order-lg-2 order-1 wow fadeInRight"></div>
                </div>

            </div>
        </section>
    )
}

export default About