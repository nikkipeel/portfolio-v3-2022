import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Layout from "../components/layout"
import NavMenu from "../components/menu"

const Project = ({ pageContext }) => {
  const {
    title,
    tags,
    image,
    description,
    link,
    repo,
    breadcrumb: { crumbs },
  } = pageContext

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent || isCurrent
      ? { className: "breadcrumb__link breadcrumb__link__active" }
      : {}
  }

  const customCrumbLabel = pageContext.title.toLowerCase()

  const customCrumbSeparator = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="crumb-separator h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  )

  return (
    <>
      <NavMenu id="top"></NavMenu>
      <div class="breadcrumbs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="home-icon hidden h-6 w-6 md:flex"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator={customCrumbSeparator}
          crumbLabel={customCrumbLabel}
          getProps={isPartiallyActive}
        />
      </div>
      <Layout pageTitle={title}>
        <div className="mx-auto flex w-full flex-col p-4 text-dark dark:text-white85 lg:w-3/4">
          <div className="mb-4 flex gap-4 px-2">
            {tags.map(tag => (
              <>
                <span className="tag text-purple rounded-md border-2 border-secondary p-1 text-sm font-semibold dark:border-darkSecondary dark:text-darkSecondary">
                  {tag}
                </span>
              </>
            ))}
          </div>
          <p className="my-4 px-2 text-lg">{description}</p>
          <div className="my-4 flex gap-8 px-2">
            <a
              href={link}
              className="font-mono text-lg font-semibold leading-tight underline"
            >
              Visit Site
            </a>
            <a
              href={repo}
              className="font-mono text-lg font-semibold leading-tight underline"
            >
              View Code
            </a>
          </div>
          <div className="my-4 h-80 w-full rounded-sm px-2 sm:w-80">
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
