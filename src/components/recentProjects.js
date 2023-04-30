import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./cards/Project"
import ArrowButton from "./buttons/ArrowButton"

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
      className="recent-projects flex h-full w-full flex-col items-center justify-center py-20"
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
      <div className="mx-auto flex justify-center pt-8 pb-20">
        <ArrowButton
          link="/projects"
          id="projects-link--home"
          text="View All Projects"
          classes="button button--primary button--with-arrow font-mono font-semibold tracking-tight shadow-md hover:brightness-125"
        />
      </div>
    </div>
  )
}

export default RecentProjects
