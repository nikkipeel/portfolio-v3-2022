import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./cards/Project"

const Projects = ({ tag }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { featured: { eq: true } }
          fileAbsolutePath: { regex: "/projects/" }
        }
      ) {
        nodes {
          frontmatter {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            link
            slug
            tags
            title
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  const filteredByTag = projects.filter(
    item => tag && item.frontmatter.tags.includes(tag)
  )

  return (
    <div className="grid-cols -px-8 mx-auto mt-8 grid items-center justify-center gap-4 md:grid-cols-2 md:p-4 lg:grid-cols-3">
      {tag &&
        filteredByTag.map(project => (
          <>
            {project.frontmatter.slug && (
              <Project
                slug={project.frontmatter.slug}
                title={project.frontmatter.title}
                image={
                  project.frontmatter.image.childImageSharp.gatsbyImageData
                }
                alt={project.frontmatter.alt}
                tags={project.frontmatter.tags}
              />
            )}
          </>
        ))}

      {!tag &&
        projects.map(project => (
          <>
            {project.frontmatter.slug && (
              <Project
                slug={project.frontmatter.slug}
                title={project.frontmatter.title}
                image={
                  project.frontmatter.image.childImageSharp.gatsbyImageData
                }
                alt={project.frontmatter.alt}
                tags={project.frontmatter.tags}
              />
            )}
          </>
        ))}
    </div>
  )
}

export default Projects
