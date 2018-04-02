import React from 'react'
import Helmet from 'react-helmet'
import styles from './styles.module.css';


export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data

  return (
    <div className={styles.root}>
      <Helmet
        title={`${post.frontmatter.title} – ${data.site.siteMetadata.title}`}
      />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
