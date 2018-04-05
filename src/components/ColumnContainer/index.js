import React from 'react';
import styles from './styles.module.css';


const ColumnContainer = ({
  children
}) =>
  (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );

export default ColumnContainer;
