const path = require("path");
 
  // creates a page for each project added
exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)

  const pages = await graphql(`
    query ProjectQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}})  {
            nodes {
                frontmatter {
                  alt
                  description
                  image {
                    childImageSharp {
                        gatsbyImageData (
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                      }
                  }
                  link
                  slug
                  tags
                  title
                  repo
                }
              }
          }
    }
  `)

   // adds context to specified items so they can be used in the page template
  let projects = pages.data.allMarkdownRemark.nodes;
  projects.map(({frontmatter}) => {
      const title = frontmatter.title
      const image = frontmatter.image.childImageSharp.gatsbyImageData
      const url = frontmatter.slug
      const description = frontmatter.description
      const tags = frontmatter.tags
      const link = frontmatter.link
      const repo = frontmatter.repo
      createPage({
        path: `/projects/${url}`,
        component: projectTemplate,
        context: {
          title: title,
          image: image,
          url: url,
          description: description,
          tags: tags,
          link: link,
          repo: repo
        }
      })
    
  })
}


