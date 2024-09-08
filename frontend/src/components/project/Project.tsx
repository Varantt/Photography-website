import React from "react";
import { ProjectProps } from "../../models/types";
import { Link } from "react-router-dom";

const Project: React.FC<ProjectProps> = ({ id, title, description }) => {
  return (
    <div key={id} className="project">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <Link to={`/project/${id}`}>Read more</Link>
    </div>
  );
};

export default Project;
