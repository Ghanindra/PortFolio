import React from 'react'
import './works.css';

const Works = () => {
  const projects = [
    {
      name: 'TODOLIST',
      description: 'A simple and intuitive Todo List application built using vanilla JavaScript. This app allows users to add, edit, and delete tasks seamlessly. The state of the tasks is managed using JavaScript, and the list is persisted in the browsers local storage, ensuring that tasks are saved across sessions.',
      technologies: 'Html,CSS,JS',
      role: 'All the part are done by me',
      liveDemo: 'https://example.com/project1',
      sourceCode: 'https://github.com/Ghanindra/ToDoList.git'
    },
    {
      name: 'Nikeshoes',
      description: 'Brief overview of the project and its purpose.',
      technologies: 'React, Redux, Node.js',
      role: 'Your specific role and contributions.',
      liveDemo: 'https://example.com/project2',
      sourceCode: 'https://github.com/Ghanindra/Nikeshoes.git'
    }
  ];
  return (
    <div>
       
        <section id="portfolio">
      <h2>Portfolio</h2>
      <span className="para">  I take pride in paying attendence for the smallest details and making sure that my work is pixel perfect. Iam exicted to bring my skills and experience to help business achieve their goals and create a strong online presence</span>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies Used:</strong> {project.technologies}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a> |{' '}
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        ))}

      </div>
      <button className="seeMore">SeeMore</button>
    </section>
        
    </div>
  );
}

export default Works;