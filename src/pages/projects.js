import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Projects from "../components/projects";

const ProjectsPage = () => (
<>

 <Layout pageTitle="Recent Projects" id="works">
  <Seo title="Works" />
      <div className="flex flex-col justify-center items-center w-full pb-12">
       <Projects></Projects>
      </div>
</Layout>
  </>
)

export default ProjectsPage;
