import React from "react";

import app1IMG from '../../../TemplateFiles/img/portfolio/app1.jpg'
import web2IMG from '../../../TemplateFiles/img/portfolio/web2.jpg'
import app3IMG from '../../../TemplateFiles/img/portfolio/app3.jpg'
import card1IMG from '../../../TemplateFiles/img/portfolio/card1.jpg'
import card2IMG from '../../../TemplateFiles/img/portfolio/card2.jpg'
import web3IMG from '../../../TemplateFiles/img/portfolio/web3.jpg'
import card3IMG from '../../../TemplateFiles/img/portfolio/card3.jpg'
import app2IMG from '../../../TemplateFiles/img/portfolio/app2.jpg'
import logo1IMG from '../../../TemplateFiles/img/portfolio/logo1.jpg'
import logo3IMG from '../../../TemplateFiles/img/portfolio/logo3.jpg'
import web1IMG from '../../../TemplateFiles/img/portfolio/web1.jpg'
import logo2IMG from '../../../TemplateFiles/img/portfolio/logo2.jpg'

const Portfolio = () =>{
    return(
        <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">

          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active">All</li>
              <li data-filter=".filter-app">House</li>
              <li data-filter=".filter-card">Buildings</li>
              <li data-filter=".filter-logo">Shops</li>
              <li data-filter=".filter-web">Interior</li>
              <li data-filter=".filter-web">Other</li>
            </ul>
          </div>
        </div>

        <div className="row" id="portfolio-wrapper">
          <div className="col-lg-3 col-md-6 portfolio-item filter-app">
            <a href="">
              <img src={app1IMG} alt=""/>
              <div className="details">
                <h4>App 1</h4>
                <span>Alored dono par</span>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <a href="">
              <img src={web2IMG} alt=""/>
              <div className="details">
                <h4>Web 2</h4>
                <span>Alored dono par</span>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6 portfolio-item filter-app">
            <a href="">
              <img src={app3IMG} alt=""/>
              <div className="details">
                <h4>App 3</h4>
                <span>Alored dono par</span>
              </div>
            </a>
          </div>

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

          <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <a href="">
              <img src={web3IMG} alt=""/>
              <div className="details">
                <h4>Web 3</h4>
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

          <div className="col-lg-3 col-md-6 portfolio-item filter-app">
            <a href="">
              <img src={app2IMG} alt=""/>
              <div className="details">
                <h4>App 2</h4>
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

          <div className="col-lg-3 col-md-6 portfolio-item filter-web">
            <a href="">
              <img src={web1IMG} alt=""/>
              <div className="details">
                <h4>Web 1</h4>
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

      </div>
    </section>
    )
}

export default Portfolio