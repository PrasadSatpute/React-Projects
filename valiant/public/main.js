// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";


// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyCW6Qrmgq6JDw6qM6yS5ym_EgJHQW0gFsI",
    authDomain: "valiant-contact-form.firebaseapp.com",
    projectId: "valiant-contact-form",
    storageBucket: "valiant-contact-form.appspot.com",
    messagingSenderId: "799088128452",
    appId: "1:799088128452:web:e07f358f081eafd65e7491",
    measurementId: "G-K01RE92XZP"
  };
  firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }