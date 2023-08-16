import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let projectItem= projects.map((post)=>(
    <ProjectItem
    key={post.id}
    name={post.name}
    about={post.about}
    technologies={post.technologies}
    />
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItem}</div>
    </div>
  );
}

export default ProjectList;
