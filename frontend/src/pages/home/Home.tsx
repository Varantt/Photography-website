import React from "react";
import Projects from "../../components/projects/Projects";
import { useQuery } from "@apollo/client";
import { Loading } from "../../components/status/loading/Loading";
import { Error } from "../../components/status/error/Error";
import { CategorySection } from "@/components/CategorySection/CategorySection";
import { PROJECTS } from "@/schema/project/queries/projects";
import { About } from "@/components/about/About";

import "./home.css";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  return (
    <>
      <About />
      <CategorySection />{" "}
      <section className="projects">
        {loading && <Loading />}
        {error && <Error message={error.message} />}
        {!loading && !error && data && (
          <Projects projectData={data.projects.data} />
        )}
      </section>
    </>
  );
};

export default Home;
