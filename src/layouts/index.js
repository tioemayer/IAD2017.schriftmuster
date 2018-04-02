import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import ColumnContainer from '../components/ColumnContainer'
import styles from './styles.module.css';

const TemplateWrapper = ({ children }) => (
  <div className={styles.root}>
    <Helmet
      title="Home"
    />
    <Header />
    <ColumnContainer>
        {children()}
    </ColumnContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
