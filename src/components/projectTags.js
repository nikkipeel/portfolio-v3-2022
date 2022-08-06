import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProjectTags = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  const tags = data.allMarkdownRemark.distinct

  // const projects = allProjects.nodes

  // const tags = projects.frontmatter //only returns first object

  // const entries = Object.values(allProjects)
  // console.log(entries)
  // const projects = Object.values(allProjects).map(project => {
  //   return project.tags
  // })

  // const project = Object.values(projects).map(item => {
  //   return item
  // })

  // const tags = Object.values(project).map(tag => {
  //   return tag
  // })

  // var allTags = []

  // Object.values(allProjects).forEach(function (value) {
  //   allTags.push({ value })
  // })

  // allTags.map(tag => {
  //   return (
  //     <>
  //       <p>{tag}</p>
  //     </>
  //   )
  // })
  return (
    <>
      {tags &&
        tags.map(tag => {
          return <option>{tag}</option>
        })}
    </>
  )
}

export default ProjectTags
