import React from "react";

const Fact = () => {
    return(
        <section id="facts">
      <div className="container wow fadeIn">
        <div className="section-header">
          <h3 className="section-title">Facts</h3>
          <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>
        <div className="row counters">

  				<div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">20</span>
            <p>Clients</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">6</span>
            <p>Projects</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">24hr</span>
            <p>Support</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">50</span>
            <p>Hard Workers</p>
  				</div>

  			</div>

      </div>
    </section>
    )
}

export default Fact