import React from 'react';
import styles from './Button2.module.css';

export default function Button2() {
   return (
      <button className={`${styles.button} ${styles.buttonTwo}`}>
         Button2
      </button>
   );
}
