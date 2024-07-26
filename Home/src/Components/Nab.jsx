import React from 'react'
import {useState} from 'react';
import './Nab.css';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
const Nab = () => {
  const[showMenu,setShowMenu]=useState(false);
  return (
    <div>
        <nav className="navbar">
        <h1 className="name">Ghanindra Bohora</h1>
      
      <div className="desktopMenu">
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuItem">Home</Link>
      <Link  activeClass='active'to='skills' spy={true} smooth={true} offset={-100}  duration={500}  className="desktopMenuItem">About</Link>
      <Link  activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100}  duration={500} className="desktopMenuItem" >portfolio</Link>
      {/* <Link  activeClass='active'to='Contact' spy={true} smooth={true} offset={-100}  duration={500}  className="desktopMenuItem">Clients</Link> */}
      </div>
      
      <button className="desktopMenuBtn" onClick={()=>{
        document.querySelector("#contact-form").scrollIntoView({behavior:'smooth'});
      }}>
        <img src="Images/contact.png" alt="logo" className="desktopMenuImg" />
        Contact Me
      </button>
    <div className="menu" onClick={()=>setShowMenu(!showMenu)}><GiHamburgerMenu /></div>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
      <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100}  duration={500} className="MenuItem"onClick={()=>setShowMenu(false)}>Home</Link>
      <Link  activeClass='active'to='skills' spy={true} smooth={true} offset={-100}  duration={500}  className="MenuItem"onClick={()=>setShowMenu(false)}>About</Link>
      <Link  activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100}  duration={500} className="MenuItem"onClick={()=>setShowMenu(false)}>portfolio</Link>
      {/* <Link  activeClass='active'to='Contact' spy={true} smooth={true} offset={-100}  duration={500}  className="desktopMenuItem">Clients</Link> */}
      <Link  activeClass='active' to='contact-form' spy={true} smooth={true} offset={-100}  duration={500} className="MenuItem"onClick={()=>setShowMenu(false)}>contact</Link>

      </div>
    </nav>
    </div>
  );
}

export default Nab;