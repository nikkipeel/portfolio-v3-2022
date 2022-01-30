import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Project = ({ pageContext }) => {
  const { title, tags, image, description } = pageContext
  return (
    <Layout>
      <article className="dark:bg-bgDark bg-white mx-auto justify-center">
        <header className="bg-primary text-white">
          <h1 className="text-5xl lg:w-3/4 px-8 py-16 mx-auto">{title}</h1>
        </header>
        <div className="lg:w-3/4 flex flex-col mx-auto dark:text-white85 text-dark p-8">
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
          <div className="h-80 w-80 rounded-sm my-4">
            
            <GatsbyImage
              image={image}
              alt={title}
              imgStyle={{ objectFit: "cover" }}
              placeholder="blurred"
            />
             
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default Project
