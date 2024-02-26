import React from "react";
import Project from "../ProjectCard";
import projects from "../../projects.json";
import HeroImg2 from "../HeroImg2";

const ProjectGallery = () => {
  return (
    <>
      <div>
        <HeroImg2 heading="Projects." text="Here are some of my latest works!"/>
      </div>
      <h1>These are my projects!</h1>

      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </>
  );
};

export default ProjectGallery;
