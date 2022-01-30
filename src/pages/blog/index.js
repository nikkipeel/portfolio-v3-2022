import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Link from 'gatsby-link';
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
    return (
  <Layout>
    <Seo title="Blog" />
    <div className="bg-white mx-auto justify-center">
        <header className="bg-primary text-white">
          <h1 className="text-5xl lg:w-3/4 px-8 py-16 mx-auto">Blog</h1>
        </header>
        <div className="lg:w-3/4 flex flex-col mx-auto text-dark p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto md:gap-8 mb-24"> 
                {data.allMarkdownRemark.nodes.map((post) => {
                    const {postSlug,postTitle,postDescription, categories, date} = post.frontmatter;
                    return (
                    <div>
                    <Link to={`/blog/${postSlug}`} state={{ postSlug: postSlug, postTitle: postTitle}}>
                    <div className="block relative leading-snug" key={ postSlug }>
                  
                        <span>
                            {postTitle &&
                            <h2 className="text-dark text-xl font-semibold rounded text-left mb-4">{postTitle}</h2>
                            }
                             {categories &&
                            <>
                            {categories.map(category => (
               <>
                            <span id={category} className="category text-dark border-2 border-dark font-semibold text-sm py-1 px-2 my-2 mr-2 rounded">{category}</span>
                            </>
                            ))}
                            </>
                            }
                            </span>
                       <div className="mt-4 mb-8"> 
                       {postDescription &&
                            <p className="text-base mb-4">{postDescription}</p>
                       }
                        <div className="flex justify-between">
                            <p className="font-semibold font-mono text-lg">Read more</p>
                            {date && 
                            <small className="text-base ml-2"><span role="img" aria-label="calendar">&#128197; </span>{post.frontmatter.date}</small>
                            }
                            </div>
                        </div> 
                    </div>
                    </Link>
                    
                </div>
                    )
})}
                   
                </div>
              </div>
         </div>
  </Layout>
    )
                        }

export const pageQuery = graphql`
    query PostQuery {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}){
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
`;

export default BlogPage;