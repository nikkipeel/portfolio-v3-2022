import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./cards/Project"

const RecentProjects = () => {
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

  return (
    <div
      id="projects"
      className="flex h-full w-full flex-col items-center justify-center bg-primary py-20 dark:bg-bgPrimary"
    >
      <h2 className="section-heading w-auto text-center text-3xl font-bold tracking-wide text-white">
        Recent Projects
      </h2>
      <div className="grid-cols -px-8 mx-auto mt-8 grid items-center justify-center gap-4 md:grid-cols-2 md:p-4 lg:grid-cols-3">
        {projects &&
          projects.map(project => (
            <Project
              slug={project.frontmatter.slug}
              title={project.frontmatter.title}
              image={project.frontmatter.image.childImageSharp.gatsbyImageData}
              alt={project.frontmatter.alt}
              tags={project.frontmatter.tags}
            />
          ))}
      </div>
      <div className="mx-auto flex justify-center bg-primary pt-8 pb-20 dark:bg-bgPrimary">
        <Link
          to="/projects"
          className="hover:text-large m-6 rounded bg-secondary py-2 px-4 font-mono font-semibold tracking-tight text-white shadow-md transition duration-500 hover:scale-105 hover:brightness-125"
        >
          View All
        </Link>
      </div>
    </div>
  )
}

export default RecentProjects
