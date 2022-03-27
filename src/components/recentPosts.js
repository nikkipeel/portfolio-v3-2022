import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
          {postData.allMarkdownRemark.nodes.map(post => {
            const { postSlug, postTitle, postDescription, categories, date } =
              post.frontmatter

            return (
              <>
                {postSlug && (
                  <Link
                    to={"/blog/" + postSlug}
                    state={{ postSlug: postSlug }}
                    className="card-post flex flex-col rounded-sm border-2 border-secondary p-4 text-left leading-snug text-white hover:scale-105 hover:border-darkPrimary"
                    tabIndex="0"
                    key={postSlug}
                  >
                    <p className="mx-4 text-base italic tracking-wide text-white65">
                      {date}
                    </p>
                    <h3 className="my-2 mx-4 text-xl font-bold">{postTitle}</h3>

                    <p className="my-2 mx-4 text-white65">{postDescription}</p>
                    <div className="my-4 mx-4 flex items-center justify-between gap-2">
                      {categories && (
                        <>
                          <div className="flex w-1/2 flex-wrap gap-2 lg:w-auto">
                            {categories.map(category => (
                              <>
                                <span className="tag rounded-md border-2 border-darkPrimary py-1 px-2 text-sm font-semibold text-darkPrimary">
                                  {category}
                                </span>
                              </>
                            ))}
                          </div>
                        </>
                      )}

                      <p className="link font-mono text-base font-bold text-white85 lg:pr-4">
                        Read More
                      </p>
                    </div>
                  </Link>
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
