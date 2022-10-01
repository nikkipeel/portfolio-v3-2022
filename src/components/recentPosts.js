import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LinkButton from "./buttons/LinkButton"
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
      <div className="overlay--skew relative h-48 w-full -skew-y-6 lg:mt-8"></div>
      <div className="recent-posts -mt-20 h-full w-full pt-64 pb-20 text-center">
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
            <LinkButton
              link="/blog"
              id="blog-link"
              text="View All"
              classes="button button--primary hover:text-large m-6 rounded px-4 font-mono font-semibold tracking-tight shadow-md transition duration-500 hover:scale-105 hover:brightness-125"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentPosts
