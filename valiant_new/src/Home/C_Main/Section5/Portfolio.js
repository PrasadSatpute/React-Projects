import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch, Link} from "react-router-dom";

import All from "./All/All";
import House from "./House/House";
import Building from "./Building/Building";
import Shops from "./Shop/Shop";
import Interior from "./Interior/Interior";
import Others from "./Other/Other";

const Portfolio = () =>{
    return(
      <Router>
        <section id="portfolio">
      <div className="container wow fadeInUp">
        <div className="section-header">
          <h3 className="section-title">Portfolio</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row">
        
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active"><Link to='/All'>All</Link></li>
              <li data-filter=".filter-app"><Link to='/House'>House</Link></li>
              <li data-filter=".filter-card"><Link to='/Building'>Building</Link></li>
              <li data-filter=".filter-logo"><Link to='/Shops'>Shops</Link></li>
              <li data-filter=".filter-web"><Link to='/Interior'>Interior</Link></li>
              <li data-filter=".filter-web"><Link to='/Other'>Other</Link></li>
            </ul>
          </div>
        </div>
        {/* Routes all Here */}
        
        
          <Switch>
            <Route exact path="/" component={All}></Route>
            <Route exact path="/All" component={All}></Route>
            <Route exact path="/House" component={House}></Route>
            <Route exact path="/Building" component={Building}></Route>
            <Route exact path="/Shops" component={Shops}></Route>
            <Route exact path="/Interior" component={Interior}></Route>
            <Route exact path="/Other" component={Others}></Route>
          </Switch>
        
      </div>
    </section>
    </Router>
    )
}

export default Portfolio