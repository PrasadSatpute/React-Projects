import React from "react";
import About from "../Section1/About";
import Fact from "../Section2/Fact";
import Service from "../Section3/Service";
import CallToAction from "../Section4/Action";
import Portfolio from "../Section5/Portfolio";
import Teams from "../Section6/Teams";
import Contact from "../Section7/Contact";


const Main = () => {
    return(
        <main id="main">
        <About></About>
        <Fact></Fact>
        <Service></Service>
        <CallToAction></CallToAction>
        <Portfolio></Portfolio>
        <Teams></Teams>
        <Contact></Contact>
        </main>
    )
}

export default Main