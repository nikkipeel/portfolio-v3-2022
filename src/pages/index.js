import * as React from "react"
import Seo from "../components/seo"
import NavMenu from "../components/menu"
import Header from "../components/header"
import Footer from "../components/footer"
import Skills from "../components/skills"
import RecentProjects from "../components/recentProjects"
import Certs from "../components/certifications"
import RecentPosts from "../components/recentPosts"
import ScrollToTop from "../components/scrollToTop"
import "../components/layout.css"

const IndexPage = () => (
  <>
    <NavMenu id="top"></NavMenu>
    <Seo title="Home" />
    <Header></Header>
    <Skills></Skills>
    <RecentProjects></RecentProjects>
    <Certs></Certs>
    <RecentPosts></RecentPosts>
    <ScrollToTop showBelow={250}></ScrollToTop>
    <Footer></Footer>
  </>
)

export default IndexPage
