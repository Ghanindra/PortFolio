import React from 'react'
import './Skills.css';
const Skills = () => {
  return (
    <div>
        <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc"> I am a skilled and passionate react developer with experience in creating visually appealing and user friendly websites.I have a strong understanding of design and a keen eye for details.Iam proficient in Html,Css and javascript , as well as design software such as Figma and Illutrator.</span>
        <div className="skillsBars">
<div className="skillBar">
    <img src="Images/nui.png" alt="uidesign" className="skillBarImg" />
    <div className="skillBarText">
        <h2>UI/UX Design</h2>
        <p> Figma is my go-to tool, offering invaluable collaborative features and powerful prototyping capabilities that streamline the design process from initial wireframes to high-fidelity designs.</p>
    </div>

</div>
<div className="skillBar">
    <img src="Images/nwebdesign.png" alt="webdesign" className="skillBarImg" />
    <div className="skillBarText">
        <h2>Web Design</h2>
        <p> My expertise in responsive design ensures that websites function seamlessly across all devices, providing an optimal user experience. I am proficient in HTML and CSS for structuring and styling web pages, and I use JavaScript to add interactivity and dynamic content</p>
    </div>

</div>

        </div>
                 </section>
         </div>
  )
}

export default Skills;