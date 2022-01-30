import React from 'react';
import {Link} from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery,graphql } from 'gatsby'

const Projects = () => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
        nodes {
            frontmatter {
              alt
              image {
                childImageSharp {
                    gatsbyImageData (
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

  return (
    <div id="projects" className="dark:bg-bgPrimary bg-primary w-full h-full flex flex-col justify-center items-center py-20">
        <h1 className="section-heading text-center w-auto text-3xl tracking-wide font-bold text-white">Recent Projects</h1>

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 items-center gap-4 mt-12 mx-auto p-4" style={{marginBottom: '-4rem'}}>
        
        {data.allMarkdownRemark.nodes.map(project => (
          <>
          {project.frontmatter.slug &&
            
        <Link to={"/projects/" + project.frontmatter.slug} className="card-project col rounded text-dark bg-white dark:bg-bgSecondary" tabIndex="0" key={project.frontmatter.slug}>
            {project.frontmatter.image &&
            <>
            <GatsbyImage className="object-contain shadow-inner" image={project.frontmatter.image.childImageSharp.gatsbyImageData} alt={project.frontmatter.alt}  placeholder="blurred"  />  
        </>
        }
        
        <div className="card-project--content flex flex-col bg-white dark:bg-bgSecondary dark:text-white85 mx-auto px-4 py-2">
        <h3 className="font-bold text-xl my-2">{project.frontmatter.title}</h3>
          <div className="flex gap-2 my-2">
            {project.frontmatter.tags &&
            <>
                {project.frontmatter.tags.map((tag) => (
                    <>
                    <span className="tag border-2 border-secondary dark:border-darkPrimary p-1 rounded-md font-semibold text-purple dark:text-darkPrimary text-sm">{tag}</span>
                </>
                ))}
                </>
              }
          </div>
          <p className="my-2 text-base font-semibold font-mono hover:underline">Read more</p>  
        </div>
        </Link>
            }
            </>
        ))}
</div>
  </div>
  )
                }


export default Projects;