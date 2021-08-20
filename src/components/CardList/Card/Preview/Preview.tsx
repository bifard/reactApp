import React, { useContext } from 'react';
import { postContext } from '../../../context/postContext';
import styles from './preview.css';

export function Preview() {
  const {preview} = useContext(postContext);
  return (
    <div className={styles.preview}>
      {preview && <img 
        className={styles.previewImg}
        src={preview}
        alt="previewImg" 
      />}
    </div>
  );
}
