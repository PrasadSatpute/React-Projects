import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch, Link} from "react-router-dom";

import All from "./All/All";
import Building from "./Building/Building";

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
              <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active">All</li>
              <li data-filter=".filter-app">House</li>
              <li data-filter=".filter-card"><Link to='/Building'>Building</Link></li>
              <li data-filter=".filter-logo">Shops</li>
              <li data-filter=".filter-web">Interior</li>
              <li data-filter=".filter-web">Other</li>
            </ul>
          </div>
        </div>
        {/* Routes all Here */}
        
        
          <Switch>
            <Route path="/All" component={All}></Route>
            <Route path="/Building" component={Building}></Route>
          </Switch>
        
      </div>
    </section>
    </Router>
    )
}

export default Portfolio