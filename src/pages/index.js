import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Seo from "../components/seo"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Certs from "../components/certifications"
import RecentPosts from "../components/recentPosts"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header></Header>
    <Skills></Skills>
    <Projects></Projects>
    <Certs></Certs>
    <RecentPosts></RecentPosts>
  </Layout>
)

export default IndexPage
