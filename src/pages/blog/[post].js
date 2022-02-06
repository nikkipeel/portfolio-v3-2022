import React from "react"
import {graphql} from 'gatsby';
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

const SinglePost = ({data, location, post }) => {

    const { state = {} } = location
    const postSlug = state.postSlug;

    const posts = data.allMarkdownRemark
    {console.log(postSlug)}
      return (
        <Layout>
 
        <div className="bg-dark w-full min-h-screen">
        {posts.nodes.map((singlePost) => (
            <>
{postSlug === singlePost.frontmatter.postSlug && (
            <article postSlug={post} key={postSlug} className="dark:bg-bgSecondary bg-primary text-dark mx-auto justify-center rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8 z-40">
                        <div className="dark:bg-bgSecondary dark:text-white bg-white text-dark bg-opacity-50 rounded p-4 md:p-12">
                            <h1 className="mono text-3xl mb-4">
                                {singlePost.frontmatter.postTitle}
                            </h1>
                             
                            <p className="text-base font-semibold mt-4 text-center">Published on <strong>{singlePost.frontmatter.date}</strong></p>
                        </div>
                       
                    </div>
                    <div className="header-overlay absolute w-full z-20" style={{backgroundColor: 'rgba(0,0,0,0.3)', height: '400px'}}></div>
                    <GatsbyImage image={singlePost.frontmatter.coverImage.childImageSharp.gatsbyImageData} alt="" className="w-full" style={{objectFit: 'cover', objectPosition: 'left top', height: '400px', zIndex: '10'}}  />
                </header>
                <div className="dark:bg-bgDark bg-white dark:text-white text-dark break-words px-8 py-12 prose max-w-none lg:prose-xl leading-normal mx-auto">
                    <div dangerouslySetInnerHTML={{ __html: singlePost.html }} />
                </div>
            </article>
)}
</>
        ))}
</div>
  </Layout>
      )


}

export const postQuery = graphql`
    query BlogPostBySlug($postSlug: StringQueryOperatorInput = {}) {
        allMarkdownRemark( filter:  {fileAbsolutePath: {regex: "/posts/"}, frontmatter: {postSlug: $postSlug}}){
            nodes {
              html
              frontmatter {
                categories
                postSlug
                postTitle
                date
                coverImage {
                    childImageSharp {
                      gatsbyImageData(
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]

                      )
                          
                    }
                  }            
                }
            }
          }
    }
`;

export default SinglePost;

