import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import NavMenu from "../../components/menu"
import Layout from "../../components/layout"
import Link from "gatsby-link"
import Seo from "../../components/seo"

const BlogPage = ({ data, location, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent || isCurrent
      ? { className: "breadcrumb__link breadcrumb__link__active" }
      : {}
  }

  const customCrumbLabel = location.pathname.toLowerCase().replaceAll("/", " ")

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
      <NavMenu></NavMenu>
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
      <Layout pageTitle="Blog">
        <Seo title="Blog" />
        <div className="mx-auto flex flex-col text-dark md:p-8">
          <div className="mx-auto mb-24 flex flex-col justify-center md:flex-row md:flex-wrap md:gap-8">
            {data.allMarkdownRemark.nodes.map(post => {
              const { postSlug, postTitle, postDescription, categories, date } =
                post.frontmatter
              return (
                <Link
                  to={`/blog/${postSlug}`}
                  state={{ postSlug: postSlug, postTitle: postTitle }}
                  className="card-post my-4 flex flex-col rounded-sm border-2 border-secondary p-4 text-left leading-snug text-dark hover:scale-105 hover:border-primary dark:text-white dark:hover:border-darkPrimary"
                  tabIndex="0"
                  key={postSlug}
                >
                  <p className="mx-4 text-base italic tracking-wide text-secondary dark:text-white65">
                    {date}
                  </p>
                  <h3 className="my-2 mx-4 text-xl font-bold">{postTitle}</h3>

                  <p className="my-2 mx-4 text-dark dark:text-white65">
                    {postDescription}
                  </p>
                  <div className="my-4 mx-4 flex items-center justify-between gap-2">
                    {categories && (
                      <>
                        <div className="flex w-1/2 flex-wrap gap-2 lg:w-auto">
                          {categories.map(category => (
                            <>
                              <span className="tag rounded-md border-2 border-secondary py-1 px-2 text-sm font-semibold text-secondary dark:border-none dark:bg-primary dark:text-white">
                                {category}
                              </span>
                            </>
                          ))}
                        </div>
                      </>
                    )}

                    <p className="link font-mono text-base font-bold text-secondary hover:text-darkSecondary dark:text-white85 lg:pr-4">
                      Read More
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query PostQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
      nodes {
        html
        frontmatter {
          postSlug
          postTitle
          postDescription
          date
          categories
        }
      }
    }
  }
`

export default BlogPage
