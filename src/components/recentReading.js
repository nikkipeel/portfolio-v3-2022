import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Bookmark from "../components/cards/Bookmark"

const RecentReading = () => {
  const bookmarkData = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/bookmarks/" } }
      ) {
        edges {
            node {
              frontmatter {
                articles {
                  blog
                  title
                  link
                  tags
                }
              }
            }
          }
        }
    }
  `)

  const bookmarks = bookmarkData.allMarkdownRemark.edges[0].node.frontmatter.articles;
  return (
    <>
      <div className="recent-posts h-full w-full py-20 text-center">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2 className="section-heading w-auto text-4xl font-bold tracking-wide text-white">
            Recent Reads
          </h2>
        </div>

        <div
          className="mx-auto mt-12 flex flex-col gap-10 max-w-max xl:w-1/2"
        >
            {bookmarks && bookmarks.map((article) => {
                return(
                  <Bookmark blog={article.blog} title={article.title} tags={article.tags} link={article.link} />
                )
            })}
              
          
        </div>
      </div>
    </>
  )
}

export default RecentReading