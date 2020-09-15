import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import blogStyles from './blog.module.scss'

// const BlogPage = () => {
// const posts = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `)

//   return (
//     <Layout>
//       <div>
//         <h1>Blog</h1>
//         <ol className={blogStyles.posts}>
//           {posts.allMarkdownRemark.edges.map(post => {
//             return (
//             <li className={blogStyles.post}>
//               <Link to={`/blog/${post.node.fields.slug}`}>
//                 <h2>{post.node.frontmatter.title}</h2>
//               </Link>
//               <p>{post.node.frontmatter.date}</p>
//             </li>
//           )})}
//         </ol>
//       </div>
//     </Layout>
//   )
// }

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate (
              formatString: "MMMM Do, YYYY"
            )
          }
        }
      }
    }
  `)

  return (
  <Layout>
    <Head title="Blog" />
    <div>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {posts.allContentfulBlogPost.edges.map(post => {
          return (
          <li className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
            </Link>
            <p>{post.node.publishedDate}</p>
          </li>
        )})}
      </ol>
    </div>
  </Layout>
  )
}

export default BlogPage