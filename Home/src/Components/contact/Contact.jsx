import React from 'react'
import {useState,useRef }from 'react';
import emailjs from '@emailjs/browser';

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import'./contact.css';

const Contact = () => {
  const form = useRef();
  
  

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');
        const [errors, setErrors] = useState({});
      
        const validate = () => {
          let tempErrors = {};
          let isValid = true;
      
          if (name.trim() === '') {
            tempErrors['name'] = 'Name is required';
            isValid = false;
          }
      
          const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
          if (!emailPattern.test(email)) {
            tempErrors['email'] = 'Valid email is required';
            isValid = false;
          }
      
          if (message.trim() === '') {
            tempErrors['message'] = 'Message is required';
            isValid = false;
          }
      
          setErrors(tempErrors);
          return isValid;
        };
        const sendEmail = (e) => {
          e.preventDefault();
      
          if (validate()) {
            alert('Form submitted successfully!');
            // Here you can add the logic to send the form data to the server or process it as needed
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
          }
          emailjs
            .sendForm('service_as2hqul', 'template_gxzu8jd', form.current, 
             {   publicKey: 'iG-6uAeT7vSvjjTaA',
        })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        
     
      
        
        };
  return (
    <div>
        <div id="contact-form">
      <h2>Contact Me</h2>
      <p>Please fill up the form to discuss any work opportunities</p>
      <form ref={form} onSubmit={sendEmail} >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
             id="name"
            placeholder="Enter your Name"
            value={name}
            name='from_name'
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
             id="email"
            placeholder="Enter your Email"
            value={email}
            name='from_email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
             id="message"
            value={message}
            name='message'
            placeholder="Type your Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit" value='send'>Send Message</button>
      </form>
      <div className="social-buttons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-btn">
         <span className="facebook"><CiFacebook /></span>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-btn">
        <span className="instagram"><FaInstagram /></span>
        </a>
      </div>
    </div>
    </div>
  );
}


export default Contact;