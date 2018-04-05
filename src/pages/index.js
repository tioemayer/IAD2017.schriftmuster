import React from 'react'
import Link from 'gatsby-link'
import ColumnContainer from '../components/ColumnContainer'

const IndexPage = () => (
  <ColumnContainer>
    <div className={'content'}>
      <h1>Schriftmuster</h1>
      <p>
        Übersicht aller Schriften.
      </p>



      <ul>
        <li><Link to="/fonts/marius">{{Schrift von Marius}}</Link></li>
        <li><Link to="/fonts/pascale">Lato </Link></li>
        <li><Link to="/fonts/wolfgang">Rambla </Link></li>
        <li><Link to="/fonts/natasha">Open Sans </Link></li>
        <li><Link to="/fonts/matthias">Roboto </Link></li>
        <li><Link to="/fonts/nils">Ubuntu </Link></li>
        <li><Link to="/fonts/tieu">Barlow </Link></li>
        <li><Link to="/fonts/stephanie">IBM Plex Sans </Link></li>
        <li><Link to="/fonts/lars">Mukta Vaani </Link></li>
        <li><Link to="/fonts/severin">Faustina </Link></li>
        <li><Link to="/fonts/marc">Cooper Hewitt </Link></li>
        <li><Link to="/fonts/nadia">Bitter </Link></li>
        <li><Link to="/fonts/nicole">Raleway </Link></li>
      </ul>


      <ul>
        <li><Link to="/styleguide/">See styleguide</Link></li>
      </ul>
    </div>
  </ColumnContainer>
)

export default IndexPage
