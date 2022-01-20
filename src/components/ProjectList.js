import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
       {
         projects.map((e)=>{
          return <ProjectItem key={e.id} name={e.name} about={e.about} technologies={e.technologies}/>
         }
         )
       }
      </div>
    </div>
  );
}

export default ProjectList;
