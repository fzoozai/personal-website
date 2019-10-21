const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blog-post.js')
    resolve(
      graphql(`
        {
          allContentfulBlog(limit: 100) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `).then(res => {
        if (res.errors) {
          reject(res.errors)
        }
        res.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: `/blog/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    )
  })
}
