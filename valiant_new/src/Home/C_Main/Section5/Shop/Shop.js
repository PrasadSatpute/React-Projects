import React from "react";

import app1IMG from '../../../../TemplateFiles/img/portfolio/app1.jpg'
import web2IMG from '../../../../TemplateFiles/img/portfolio/web2.jpg'
import app3IMG from '../../../../TemplateFiles/img/portfolio/app3.jpg'
import card1IMG from '../../../../TemplateFiles/img/portfolio/card1.jpg'
import card2IMG from '../../../../TemplateFiles/img/portfolio/card2.jpg'
import web3IMG from '../../../../TemplateFiles/img/portfolio/web3.jpg'
import card3IMG from '../../../../TemplateFiles/img/portfolio/card3.jpg'
import app2IMG from '../../../../TemplateFiles/img/portfolio/app2.jpg'
import logo1IMG from '../../../../TemplateFiles/img/portfolio/logo1.jpg'
import logo3IMG from '../../../../TemplateFiles/img/portfolio/logo3.jpg'
import web1IMG from '../../../../TemplateFiles/img/portfolio/web1.jpg'
import logo2IMG from '../../../../TemplateFiles/img/portfolio/logo2.jpg'

const Portfolio = () =>{
    return(
      <div className="row" id="portfolio-wrapper">
        <div className="col-lg-3 col-md-6 portfolio-item filter-card">
        <a href="">
          <img src={card1IMG} alt=""/>
          <div className="details">
            <h4>Card 1</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-card">
        <a href="">
          <img src={card2IMG} alt=""/>
          <div className="details">
            <h4>Card 2</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-card">
        <a href="">
          <img src={card3IMG} alt=""/>
          <div className="details">
            <h4>Card 3</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
        <a href="">
          <img src={logo1IMG} alt=""/>
          <div className="details">
            <h4>Logo 1</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
        <a href="">
          <img src={logo3IMG} alt=""/>
          <div className="details">
            <h4>Logo 3</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-logo">
        <a href="">
          <img src={logo2IMG} alt=""/>
          <div className="details">
            <h4>Logo 2</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
    </div>
    )
}

export default Portfolio