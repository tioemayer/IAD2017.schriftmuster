import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Doc Starter</h1>
    <p>
      This is the Root-Site. See `pages/index.js`.
    </p>
    <ul>
      <li><Link to="/styleguide/">See styleguide</Link></li>
    </ul>
  </div>
)

export default IndexPage
