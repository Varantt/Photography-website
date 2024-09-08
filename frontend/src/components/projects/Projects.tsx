import React from "react";
import { ProjectData, ProjectsProps } from "@/schema/project/types/types";
import Project from "../project/Project";

const Projects: React.FC<ProjectsProps> = ({ projectData }) => {
  return (
    <>
      {projectData.map((project: ProjectData) => {
        const { title, description } = project.attributes;
        return (
          <Project
            key={project.id}
            title={title}
            description={description}
            id={project.id}
          />
        );
      })}
    </>
  );
};

export default Projects;
