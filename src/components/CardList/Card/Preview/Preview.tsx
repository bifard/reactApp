import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
    <img 
      className={styles.previewImg}
      src="https://cdn.dribbble.com/users/1963775/screenshots/16168263/media/831ecaaea8b96ab993e8d0ac11ffc12a.jpg?compress=1&resize=1000x750" 
      alt="previewImg" 
    />
  </div>
  );
}
