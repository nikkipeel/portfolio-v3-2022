import * as React from "react"
import {Link} from 'gatsby';
import HeaderInfo from "../components/headerInfo"
import NavMenu from "../components/menu"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Projects from "../components/projects";

const WorksPage = () => (
<>
    <Seo title="Works" />
 <Layout>
 <header className="bg-primary text-white">
          <h1 className="text-5xl lg:w-3/4 px-8 py-16 mx-auto">Recent Projects</h1>
        </header>
  <section id="works" className="dark:bg-bgPrimary bg-white w-full h-full">
      <div className="flex flex-col justify-center items-center w-full pb-12">
       <Projects></Projects>
      </div>
    </section>
</Layout>
  </>
)

export default WorksPage
