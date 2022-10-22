import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import NavMenu from "../../components/menu"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Post from "../../components/cards/Post"

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
      <div className="breadcrumbs">
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
      <Layout className="page--blog" pageTitle="Blog">
        <Seo title="Blog" />
        <div className="mx-auto flex flex-col md:p-8">
          <div className="mx-auto mb-24 flex flex-col justify-center gap-4 md:flex-row md:flex-wrap md:gap-8">
            {data.allMarkdownRemark.nodes.map((post, index) => {
              const { postSlug, postTitle, postDescription, categories, date } =
                post.frontmatter
              return (
                <Post
                  slug={postSlug}
                  date={date}
                  title={postTitle}
                  description={postDescription}
                  tags={categories}
                  index={index}
                />
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
