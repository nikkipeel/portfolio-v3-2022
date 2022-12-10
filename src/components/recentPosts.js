import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArrowButton from "./buttons/ArrowButton"
import Post from "./cards/Post"

const RecentPosts = () => {
  const postData = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 3
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        nodes {
          frontmatter {
            postSlug
            postTitle
            postDescription
            categories
            date
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="recent-posts h-full w-full pt-64 pb-20 text-center">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2 className="section-heading w-auto text-4xl font-bold tracking-wide text-white">
            Recent Posts
          </h2>
        </div>

        <div
          className="mx-auto mt-12 flex flex-col items-center gap-4 p-4 xl:w-3/4"
          style={{ marginBottom: "-4rem" }}
        >
          {postData.allMarkdownRemark.nodes.map((post, index) => {
            const { postSlug, postTitle, postDescription, categories, date } =
              post.frontmatter

            return (
              <>
                {postSlug && (
                  <Post
                    slug={postSlug}
                    date={date}
                    title={postTitle}
                    description={postDescription}
                    tags={categories}
                    index={index}
                  />
                )}
              </>
            )
          })}
          <div className="mx-auto mt-8 mb-20 flex justify-center">
            <ArrowButton
              link="/blog"
              id="blog-link"
              text="Visit Blog"
              classes="button button--secondary button--with-arrow  m-6 font-mono font-semibold tracking-tight shadow-md transition  hover:brightness-125"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentPosts
