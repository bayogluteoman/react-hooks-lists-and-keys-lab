import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techList = Object.entries(technologies).map(([key, value]) => {
    return (
      <span key={key}> {value.toString()} </span>
    );
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies" >
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
