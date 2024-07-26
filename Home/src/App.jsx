import React from 'react'
import Introduction from './Components/Introduction.jsx';
import Nab from './Components/Nab.jsx';
import Skills from './Components/Skills.jsx';
import Works from './Components/works/Works.jsx';
import Contact from './Components/contact/Contact.jsx';
import Footer from './Components/footer/Footer.jsx';
function App(){
  return (
    <div>

      <Nab />
    <Introduction />
    <Skills />
    <Works/>
    <Contact />
     <Footer/>
    </div>
  );
};

  export default App;
