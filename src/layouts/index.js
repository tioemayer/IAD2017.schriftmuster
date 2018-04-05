import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ColumnContainer from '../components/ColumnContainer'
import styles from './styles.module.css';

const TemplateWrapper = ({ children }) => (
  <div className={styles.root}>
    <Helmet
      title="Home"
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
