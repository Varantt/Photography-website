import { gql } from "@apollo/client"; // Ensure correct package import

const PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;

const PROJECTS = gql`
  query GetProjects {
    projects {
      data {
        id
        attributes {
          title
          description
          updatedAt
        }
      }
    }
  }
`;

export { PROJECT, PROJECTS };
