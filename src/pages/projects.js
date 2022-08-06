import React, { useState } from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Seo from "../components/seo"
import NavMenu from "../components/menu"
import Layout from "../components/layout"
import Projects from "../components/projects"
import Select from "../components/formFields/Select"

const ProjectsPage = ({ data, projects, location, pageContext }) => {
  const tags = data?.allMarkdownRemark?.distinct

  const [tag, setTag] = useState("")

  const {
    breadcrumb: { crumbs },
  } = pageContext

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent || isCurrent
      ? { className: "breadcrumb__link breadcrumb__link__active" }
      : {}
  }

  const customCrumbLabel = location.pathname.toLowerCase().replaceAll("/", " ")

  const customCrumbSeparator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="crumb-separator h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )

  const handleProjectFilter = e => {
    setTag(e.target.value)
  }

  return (
    <>
      <NavMenu></NavMenu>
      <div class="breadcrumbs md:pl-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon hidden h-6 w-6 md:flex"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator={customCrumbSeparator}
          crumbLabel={customCrumbLabel}
          getProps={isPartiallyActive}
        />
      </div>
      <Layout pageTitle="Recent Projects" id="works">
        <Seo title="Works" />
        <div className="flex w-full flex-col items-center justify-center pb-12">
          <Select
            name="project filter"
            label="Filter projects by tag"
            id="select-project-tags"
            options={tags}
            onChange={handleProjectFilter}
            value={tag}
          />
          <Projects projects={projects} tag={tag}></Projects>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      distinct(field: frontmatter___tags)
    }
  }
`

export default ProjectsPage
