import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Project = ({ pageContext }) => {
  const { title, tags, image, description } = pageContext
  return (
    <Layout pageTitle={title}>
        <div className="w-full lg:w-3/4 flex flex-col mx-auto dark:text-white85 text-dark p-4">
        <div className="flex gap-4 mb-4">
            {tags.map(tag => (
              <>
                <span className="tag border-2 border-secondary dark:border-darkSecondary p-1 rounded-md font-semibold dark:text-darkSecondary text-purple text-sm">
                  {tag}
                </span>
              </>
            ))}
          </div>
          <p className="text-lg my-4">{description}</p>
                <div className="flex gap-8 my-4">
          <a href="#" className="font-mono leading-tight font-semibold text-lg underline">Visit Site</a>
          <a href="#" className="font-mono leading-tight font-semibold text-lg underline">View Code</a>
          </div>
          <div className="h-80 w-full sm:w-80 rounded-sm my-4">
            
            <GatsbyImage
              image={image}
              alt={title}
              imgStyle={{ objectFit: "cover" }}
              placeholder="blurred"
            />
             
          </div>
        </div>
    </Layout>
  )
}

export default Project
