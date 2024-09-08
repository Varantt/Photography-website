interface ProjectAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ProjectData {
  id: string;
  attributes: ProjectAttributes;
  __typename?: string;
}

interface ProjectsProps {
  projectData: ProjectData[];
}
interface ProjectDetailsProps {
  projectDetails: ProjectData | undefined;
}

export type { ProjectData, ProjectsProps, ProjectDetailsProps };
