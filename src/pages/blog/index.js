import React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from "../../components/layout"
import Link from 'gatsby-link';
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
    return (
  <Layout pageTitle="Blog">
    <Seo title="Blog" />
        <div className="flex flex-col mx-auto text-dark p-8">
                <div className="flex flex-col md:flex-row justify-center mx-auto md:gap-8 mb-24"> 
                {data.allMarkdownRemark.nodes.map((post) => {
                    const {postSlug,postTitle,postDescription, categories, date} = post.frontmatter;
                    return (
                        <Link to={`/blog/${postSlug}`} state={{ postSlug: postSlug, postTitle: postTitle}} className="card-post flex flex-col leading-snug p-4 rounded-sm border-2 border-secondary hover:border-primary dark:hover:border-darkPrimary hover:scale-105 text-dark dark:text-white text-left" tabIndex="0" key={postSlug}>
                        <p className="text-secondary dark:text-white65 italic mx-4 text-base tracking-wide">{date}</p>
                        <h3 className="my-2 mx-4 font-bold text-xl">{postTitle}</h3>
                        
                          <p className="text-dark dark:text-white65 my-2 mx-4">{postDescription}</p>
                        <div className="flex gap-2 justify-between items-center my-4 mx-4">
                          {categories &&
                          <>
                          <div className="flex flex-wrap w-1/2 lg:w-auto gap-2">
                              {categories.map((category) => (
                                  <>
                                  <span className="tag border-2 border-secondary dark:border-none dark:bg-primary py-1 px-2 rounded-md font-semibold text-sm text-secondary dark:text-white">{category}</span>
                              </>
                              ))}
                              </div>
                              </>
                            }
              
                             <p className="text-secondary hover:text-darkSecondary dark:text-white85 link lg:pr-4 text-base font-bold font-mono">Read More</p>  
                        </div>
                      
                      </Link>
                    )
})}
                   
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