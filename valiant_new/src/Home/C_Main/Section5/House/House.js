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

const House = () =>{
    return(
      <div className="row" id="portfolio-wrapper">
      <div className="col-lg-3 col-md-6 portfolio-item filter-web">
        <a href="">
          <img src={web2IMG} alt=""/>
          <div className="details">
            <h4>Web 2</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-web">
        <a href="">
          <img src={web3IMG} alt=""/>
          <div className="details">
            <h4>Web 3</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
      <div className="col-lg-3 col-md-6 portfolio-item filter-web">
        <a href="">
          <img src={web1IMG} alt=""/>
          <div className="details">
            <h4>Web 1</h4>
            <span>Alored dono par</span>
          </div>
        </a>
      </div>
    </div>
    )
}

export default House