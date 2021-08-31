import React from 'react';
import styles from './loader.css';

export function Loader() {
  return (
 <div className={styles.container}>
    <div className={styles.windows8}>
    <div className={`${styles.wBall} ${styles.wBall_1}`}>
      <div className={styles.wInnerBall}></div>
    </div>
    <div className={`${styles.wBall} ${styles.wBall_2}`}>
      <div className={styles.wInnerBall}></div>
    </div>
    <div className={`${styles.wBall} ${styles.wBall_3}`}>
      <div className={styles.wInnerBall}></div>
    </div>
    <div className={`${styles.wBall} ${styles.wBall_4}`} >
      <div className={styles.wInnerBall}></div>
    </div>
    <div className={`${styles.wBall} ${styles.wBall_5}`}>
      <div className={styles.wInnerBall}></div>
    </div>
  </div>
 </div>
  );
}
