import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Layout from "../components/layout"
import NavMenu from "../components/menu"

const Project = ({ pageContext }) => {
  const { title, tags, image, description, link, repo, breadcrumb: { crumbs }, } = pageContext

    const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
      return isPartiallyCurrent || isCurrent
        ? { className: 'breadcrumb__link breadcrumb__link__active' }
        : {}
    }

    const customCrumbLabel = pageContext.title.toLowerCase();

  const customCrumbSeparator = <svg xmlns="http://www.w3.org/2000/svg" className="crumb-separator h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
</svg>

 
  return (
    <>
    <NavMenu id="top"></NavMenu>
    <div class="breadcrumbs">
    <svg xmlns="http://www.w3.org/2000/svg" className="home-icon hidden md:flex h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
<Breadcrumb
crumbs={crumbs}
crumbSeparator={customCrumbSeparator}
crumbLabel={customCrumbLabel}
getProps={isPartiallyActive}
/>
</div>
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
          <a href={link} className="font-mono leading-tight font-semibold text-lg underline">Visit Site</a>
          <a href={repo} className="font-mono leading-tight font-semibold text-lg underline">View Code</a>
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
    </>
  )
}

export default Project
