import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>E-commerce Platform</h3>
        <p>A full-stack web application with cart and checkout features.</p>
        <a href="#" className="button">View Project</a>
      </div>
      <div className="project">
        <h3>React Native App</h3>
        <p>A mobile app developed with React Native and Expo.</p>
        <a href="#" className="button">View Project</a>
      </div>
    </section>
  );
};

export default Projects;
