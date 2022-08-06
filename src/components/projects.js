import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import LazySlideRight from "../animations/lazySlideRight"

const Projects = ({ tag }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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
              <LazySlideRight>
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
                  <h3 className="card-title z-100 my-2 py-2 px-4 text-xl font-bold">
                    {project.frontmatter.title}
                  </h3>

                  <div className="card-project--content mx-auto flex flex-col bg-white p-4 dark:bg-bgSecondary dark:text-white85">
                    <h3 className="my-2 text-xl font-bold">
                      {project.frontmatter.title}
                    </h3>
                    <div className="my-2 flex gap-2">
                      {project.frontmatter.tags && (
                        <>
                          {project.frontmatter.tags.map(tag => (
                            <>
                              <span className="tag rounded-md border-2 border-secondary p-1 text-sm font-semibold text-secondary dark:border-darkPrimary dark:text-darkPrimary">
                                {tag}
                              </span>
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
              </LazySlideRight>
            )}
          </>
        ))}

      {!tag &&
        projects.map(project => (
          <>
            {project.frontmatter.slug && (
              <LazySlideRight>
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
                  <h3 className="card-title z-100 my-2 py-2 px-4 text-xl font-bold">
                    {project.frontmatter.title}
                  </h3>

                  <div className="card-project--content mx-auto flex flex-col bg-white p-4 dark:bg-bgSecondary dark:text-white85">
                    <h3 className="my-2 text-xl font-bold">
                      {project.frontmatter.title}
                    </h3>
                    <div className="my-2 flex gap-2">
                      {project.frontmatter.tags && (
                        <>
                          {project.frontmatter.tags.map(tag => (
                            <>
                              <span className="tag rounded-md border-2 border-secondary p-1 text-sm font-semibold text-secondary dark:border-darkPrimary dark:text-darkPrimary">
                                {tag}
                              </span>
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
              </LazySlideRight>
            )}
          </>
        ))}
    </div>
  )
}

export default Projects
