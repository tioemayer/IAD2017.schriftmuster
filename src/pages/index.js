import React from 'react'
import Link from 'gatsby-link'
import ColumnContainer from '../components/ColumnContainer'

const IndexPage = () => (
  <ColumnContainer>
    <div className={'content'}>
      <h1>Doc Starter</h1>
      <p>
        This is the Root-Site.
      </p>
      <ul>
        <li><Link to="/styleguide/">See styleguide</Link></li>
      </ul>
    </div>
  </ColumnContainer>
)

export default IndexPage
