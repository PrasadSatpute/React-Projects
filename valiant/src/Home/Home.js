import React from 'react'
import NavBar from '../NavBar/NavBar';
import Intro from '../Intro/Intro';
import About from '../About/About'
import Contact from '../Contact/Contact'
import Project from '../ProjectPage/Project'
import Footer from '../Footer/Footer';

const Home = () => {
    return(
        <>
        <NavBar></NavBar>
        <Intro></Intro>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
        </>
    )
}

export default Home