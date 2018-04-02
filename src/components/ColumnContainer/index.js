import React from 'react';
import styles from './styles.module.css';


const ColumnContainer = ({
  children
}) =>
  (
    <div className={styles.root}>
      {children}
    </div>
  );

export default ColumnContainer;
