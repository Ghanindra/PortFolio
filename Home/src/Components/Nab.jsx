import React from 'react'
import './Nab.css';
const Nab = () => {
  return (
    <div>
        <div className="navbar">
        <h1 className="name">Ghanindra Bohora</h1>
      
      <div className="desktopMenu">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">portfolio</a>
      <a href="">Clients</a>
      </div>
      
      <button className="desktopMenuBtn">
        <img src="Images/contact.png" alt="logo" className="desktopMenuImg" />
        Contact Me
      </button>
    </div>
    </div>
  );
}

export default Nab;