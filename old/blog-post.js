import React from 'react';
import { graphql } from 'gatsby'

export default function PostTemplate({ data }) {
    const post = data.allMarkdownRemark.nodes

    return (
            <article className="container text-white mx-auto justify-center rounded-lg mt-4">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8 z-40">
                        <div className="bg-white text-darkBlue bg-opacity-75 rounded p-4 md:p-12">
                            <h1 className="mono text-3xl mb-4">
                                {post.frontmatter.postTitle}
                            </h1>
                            <p className="text-base font-semibold mt-4 text-center">Published on <strong>{post.frontmatter.date}</strong></p>
                        </div>
                    </div>
                   
                </header>
                <div className="break-words px-4 lg:px-16 py-12 lg:py-20 prose lg:prose-xl max-w-screen leading-normal">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </article>
    )
}
export const postQuery = graphql`
    query BlogPostBySlug {
        allMarkdownRemark( filter:  {fileAbsolutePath: {regex: "/posts/"}}){
            nodes {
              html
              frontmatter {
                categories
                postSlug
                postTitle
              }
            }
          }
    }
`