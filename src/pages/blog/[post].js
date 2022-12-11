import React from "react"
import { graphql } from "gatsby"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import Seo from "../../components/seo"
import NavMenu from "../../components/menu/menu"
import Layout from "../../components/layout"
import "../../components/layout.css"

const SinglePost = ({ data, location, post, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
    return isPartiallyCurrent || isCurrent
      ? { className: "breadcrumb__link breadcrumb__link__active" }
      : {}
  }

  const { state = {} } = location
  const postSlug = state.postSlug

  const customCrumbLabel = postSlug
    ? postSlug.toLowerCase().replaceAll("-", " ")
    : location.pathname.toLowerCase().replaceAll("-", " ")

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

  const posts = data.allMarkdownRemark
  return (
    <>
      <NavMenu></NavMenu>
      <div class="breadcrumbs md:pl-8">
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

      {posts.nodes.map(singlePost => (
        <>
          {postSlug === singlePost.frontmatter.postSlug && (
            <>
              <Layout pageTitle={singlePost.frontmatter.postTitle}>
                <div className="min-h-screen w-full">
                  <Seo title={singlePost.frontmatter.postTitle} />
                  <article
                    postSlug={post}
                    key={postSlug}
                    className=" mx-auto justify-center rounded-lg"
                  >
                    <header className="relative px-6 text-left md:px-16">
                      <p className="my-4 text-base font-semibold">
                        Published on{" "}
                        <strong>{singlePost.frontmatter.date}</strong>
                      </p>

                      <div className="categories mb-4 flex gap-4">
                        {singlePost.frontmatter.categories.map(category => (
                          <>
                            {category === "All" ? (
                              ""
                            ) : (
                              <a
                                href="#"
                                className="category rounded-md border-2 p-1 text-sm font-semibold"
                              >
                                {category}
                              </a>
                            )}
                          </>
                        ))}
                      </div>
                      <span></span>
                    </header>

                    <div className="post mx-auto max-w-none break-words px-6 py-8 leading-7 md:px-16 xl:py-12">
                      <div
                        className="post-content text-lg"
                        dangerouslySetInnerHTML={{ __html: singlePost.html }}
                      />
                    </div>
                  </article>
                </div>
              </Layout>
            </>
          )}
        </>
      ))}
    </>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($postSlug: StringQueryOperatorInput = {}) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { postSlug: $postSlug }
      }
    ) {
      nodes {
        html
        frontmatter {
          categories
          postSlug
          postTitle
          date
          coverImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`

export default SinglePost
