// Category

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
  __typename?: string;
}

interface CategoryAttributes {
  __typename: string;
  name: string;
}

interface CategoryDataObject {
  data: CategoryData[];
  __typename: string;
}

// Category + projects

interface CategoryProjectAttributes {
  __typename: string;
  title: string;
  description: string;
  categories: CategoryDataObject;
}

interface CategoryProps {
  categoryData: CategoryData[];
}

interface CategoryProjectData {
  id: string;
  attributes: CategoryProjectAttributes;
  __typename?: string;
}

export type {
  CategoryData,
  CategoryAttributes,
  CategoryDataObject,
  CategoryProjectAttributes,
  CategoryProjectData,
  CategoryProps
};
