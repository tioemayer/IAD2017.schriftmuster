import React from 'react'
import Helmet from 'react-helmet'
import styles from './styles.module.css';
import Header from '../../components/Header'
import ColumnContainer from '../../components/ColumnContainer'


export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data

  return (
    <div className={styles.root}>
      <Helmet
        title={`${post.frontmatter.title} – ${data.site.siteMetadata.title}`}
      />
      <Header />
      <ColumnContainer>
        <div
          className={'content'}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </ColumnContainer>
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
