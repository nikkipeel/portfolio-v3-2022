import React from "react"
import {Link, graphql} from 'gatsby';
import Seo from "../../components/seo"
import NavMenu from "../../components/menu"
import ScrollToTop from "../../components/scrollToTop"
import Footer from "../../components/footer"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../components/layout.css"

import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const SinglePost = ({data, location, post, pageContext }) => {
    const {
        breadcrumb: { crumbs },
      } = pageContext

      const isPartiallyActive = ({ isPartiallyCurrent, isCurrent }) => {
        return isPartiallyCurrent || isCurrent
          ? { className: 'breadcrumb__link breadcrumb__link__active' }
          : {}
      }

      const { state = {} } = location
      const postSlug = state.postSlug;

      const customCrumbLabel = postSlug ? postSlug.toLowerCase().replaceAll('-', ' ') : location.pathname.toLowerCase().replaceAll('-', ' ');

    const customCrumbSeparator = <svg xmlns="http://www.w3.org/2000/svg" className="crumb-separator h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>

    const posts = data.allMarkdownRemark
      return (
          <>
        <NavMenu></NavMenu>
        <div class="breadcrumbs md:pl-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="home-icon hidden md:flex h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
        <Breadcrumb
            crumbs={crumbs}
            crumbSeparator={customCrumbSeparator}
            crumbLabel={customCrumbLabel}
            getProps={isPartiallyActive}
          />
        </div>
        <div className="bg-dark w-full min-h-screen">
        {posts.nodes.map((singlePost) => (
            <>
{postSlug === singlePost.frontmatter.postSlug && (
    <>
    <Seo title={singlePost.frontmatter.postTitle}/>
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
            </>
)}
</>
        ))}
</div>
<ScrollToTop showBelow={250}></ScrollToTop>
<Footer></Footer>
</>
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

