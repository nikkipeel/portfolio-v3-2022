import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
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
      <div className="relative h-48 w-full -skew-y-6 bg-dark dark:bg-bgDark lg:mt-8"></div>
      <div className="-mt-20 h-full w-full bg-dark pt-64 pb-20 text-center dark:bg-bgDark">
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
          <div className="mx-auto mt-8 mb-20 flex justify-center bg-dark dark:bg-bgDark">
            <Link
              to="/blog"
              className="hover:text-large m-6 rounded bg-secondary py-2 px-4 font-mono font-semibold tracking-tight text-white shadow-md transition duration-500 hover:scale-105 hover:brightness-125"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentPosts
