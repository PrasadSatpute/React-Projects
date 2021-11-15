import axios from 'axios'
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [message,setMessage] = useState('')

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };
  const onChangeMessage = (e) => {
    const message = e.target.value;
    setMessage(message);
  };

  const Submit = () => {
    axios.post('https://script.google.com/macros/s/AKfycbyBrXWNzaGCAq6JI0JBwzjUd1HgE_YpdDDNi6uvgcwC4iyygYAcWe66ZYWfa9_4tcfP/exec',{
        name:name,
        email:email,
        phone:phone,
        message:message
    })
    .then((response) => {
        
      console.log(response);
        alert("Data Successfull Send")
        
    })
}
    
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
        <form autocomplete="off" method='POST' id="contactForm" action='https://script.google.com/macros/s/AKfycbyBrXWNzaGCAq6JI0JBwzjUd1HgE_YpdDDNi6uvgcwC4iyygYAcWe66ZYWfa9_4tcfP/exec'>
          <p>
            <label htmlFor='name'>Name</label>
            <input 
            autocomplete="off" 
            type="text" 
            name="name" 
            id="name" 
            onChange={onChangeName}
            required />
          </p>
          {/* <p>
            <label>Company</label>
            <input type="text" name="company" id="company" />
          </p> */}
          <p>
            <label htmlFor='email'>Email Address</label>
            <input onChange={onChangeEmail} type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor='phone'>Phone Number</label>
            <input onChange={onChangePhone} type="text" name="phone" id="phone" />
          </p>
          <p className="full">
            <label htmlFor='message'>Message</label>
            <textarea onChange={onChangeMessage} name="message" rows="5" id="message"></textarea>
          </p>
          <p className="full">
            <button type="submit" onClick={Submit}>Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
        </div>
    )
}
export default Contact