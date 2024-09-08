import React from "react";
import { ProjectDetailsProps } from "../../models/types";

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectDetails,
}) => {
  if (!projectDetails) {
    return null; // or render a fallback component
  }

  const { attributes, id } = projectDetails;

  console.log(projectDetails);
  return (
    <div className="project-details">
      <h3>{attributes.title}</h3>
      <p>{attributes.description}</p>
    </div>
  );
};
