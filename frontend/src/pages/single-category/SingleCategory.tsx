import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Loading } from "../../components/status/loading/Loading";
import { Error } from "../../components/status/error/Error";
import { CategoryData, CategoryProjectData } from "@/schema/category/types/types";
import { CATEGORY } from "@/schema/category/queries/categories";



const SingleCategory: React.FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id },
  });

  console.log(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  if (!data || !data.category) {
    return <div>No projects found.</div>;
  }

  const categoryID: string = data.category.data.id;
  const categoryName: string = data.category.data.attributes.name;
  const categoryProjects: CategoryProjectData[] =
    data.category.data.attributes.projects.data;

  return (
    <div id={`category-${categoryID}`}>
      <h1>{categoryName}</h1>
      {categoryProjects.map((project: CategoryProjectData) => {
        const { id, attributes } = project;

        const { title, description, categories } = attributes;

        return (
          <div className="project" key={`project-${id}`}>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className="categories">
              {categories.data.map((category: CategoryData) => {
                console.log(category);
                const {
                  id,
                  attributes: { name },
                } = category;

                return <div key={`project-category-${id}`}>{name}</div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCategory;
