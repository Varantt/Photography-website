import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../../components/project-details/ProjectDetails";
import { useQuery } from "@apollo/client";
import { PROJECT } from "@/schema/project/queries/projects";
import { CategoryProjectData } from "@/schema/category/types/types";



export const SingleProject: React.FC = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(PROJECT, {
    variables: {
      id,
    },
  });


  let projectDetails: CategoryProjectData | undefined;
  if (!loading && data) {
    projectDetails = data.project.data;
  }

  return (
    <>
      {loading && <div>Loading ... </div>}
      {error && <div>{error.message} </div>}
      {!error && !loading && data && (
        <div className="project-details">
          <ProjectDetails projectDetails={projectDetails} />
        </div>
      )}
    </>
  );
};
