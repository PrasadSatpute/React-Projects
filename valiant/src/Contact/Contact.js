import React from 'react'
import './Contact.css'

const Contact = () => {
    
    return(
        <div className='Contact' id='Contact'>
            <div className="container">
    <h1 className="brand"><span>VALIANT</span> REAL-ESTATE AND CONSTRUCTIONS</h1>
    <div className="wrapper">
      <div className="company-info">
      <h3>VALIANT <br/> REAL-ESTATE AND CONSTRUCTIONS</h3>
        <ul>
          <li><i className="fa fa-road"></i> Manewada Road</li>
          <li><i className="fa fa-phone"></i> (+91)9595754529</li>
          <li><i className="fa fa-envelope"></i> valiant@gmail.com</li>
        </ul>
      </div>
      <div className="contact">
        <h3>Email Us</h3>
        <div className="alert">Your message has been sent</div>
        <form autocomplete="off" method='POST' id="contactForm" action='https://script.google.com/macros/s/AKfycbwlr6NQDG7_gc4LFunaiRPmM8enk1h1ASY-uJnPyTIQtDGQKaPVw_PrSQ5m0gPJzk2KZw/exec'>
          <p>
            <label htmlFor='name'>Name</label>
            <input autocomplete="off" type="text" name="name" id="name" required />
          </p>
          {/* <p>
            <label>Company</label>
            <input type="text" name="company" id="company" />
          </p> */}
          <p>
            <label htmlFor='email'>Email Address</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor='phone'>Phone Number</label>
            <input type="text" name="phone" id="phone" />
          </p>
          <p className="full">
            <label htmlFor='message'>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p className="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Contact