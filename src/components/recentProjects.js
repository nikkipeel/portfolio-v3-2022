import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import LazySlideRight from "../animations/lazySlideRight"

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
          projects.map((project, index) => (
            <LazySlideRight
              key={project.frontmatter.slug + ", indexOf: " + index}
            >
              {project.frontmatter.slug && (
                <Link
                  to={"/projects/" + project.frontmatter.slug}
                  className="card-project col m-4 rounded bg-white text-dark shadow-sm shadow-dark dark:bg-bgSecondary dark:shadow-sm dark:shadow-darkPrimary"
                  tabIndex="0"
                  key={project.frontmatter.slug}
                >
                  {project.frontmatter.image && (
                    <>
                      <GatsbyImage
                        className="object-cover shadow-inner"
                        image={
                          project.frontmatter.image.childImageSharp
                            .gatsbyImageData
                        }
                        alt={project.frontmatter.alt}
                        placeholder="blurred"
                      />
                    </>
                  )}
                  <h3 className="card-title z-100 my-2 py-2 px-4 text-xl font-bold dark:border-none">
                    {project.frontmatter.title}
                  </h3>

                  <div className="card-project--content mx-auto flex flex-col bg-white p-4 dark:bg-bgSecondary dark:text-white85">
                    <h3 className="my-2 text-xl font-bold dark:border-none">
                      {project.frontmatter.title}
                    </h3>
                    <div className="my-2 flex gap-2">
                      {project.frontmatter.tags && (
                        <>
                          {project.frontmatter.tags.map((tag, index) => (
                            <>
                              {tag === "All" ? (
                                <span
                                  className="sr-only"
                                  key={tag + " " + index}
                                >
                                  {tag}
                                </span>
                              ) : (
                                <span
                                  key={tag + " " + index}
                                  className="tag rounded-md border-2 border-secondary p-1 text-sm font-semibold text-secondary dark:border-darkPrimary dark:text-darkPrimary"
                                >
                                  {tag}
                                </span>
                              )}
                            </>
                          ))}
                        </>
                      )}
                    </div>
                    <p className="my-2 font-mono text-base font-semibold hover:underline">
                      Read more
                    </p>
                  </div>
                </Link>
              )}
            </LazySlideRight>
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
