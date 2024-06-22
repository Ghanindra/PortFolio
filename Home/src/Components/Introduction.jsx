import React from 'react'
import './Introduction.css';
const Introduction = () => {
  return (
    <div>
        <section id="intro">
         <div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Ghanindra</span><br />React Developer

</span>
<p className="introPara"> I am a skilled react developer with experience in creating<br /> visually appealing and user friendly website. </p>
   <button className="btn"><img src="Images/hire.png" alt=""/> <a href=""> Hire Me</a></button>
        
        
         </div>
       <img src="Images/p.png" alt="Profile" className="bg" />
        </section>
    </div>
  );
}

export default Introduction;