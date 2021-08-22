import React, { useContext } from 'react';
import { postContext } from '../../../context/postContext';
import styles from './preview.css';

export function Preview() {
  const {preview} = useContext(postContext);
  return (
    <div className={styles.preview}>
      {preview && <img 
        className={styles.previewImg}
        src={preview || 'https://media.istockphoto.com/photos/3d-pink-exclamation-mark-icon-isolated-on-pink-pastel-color-wall-picture-id1214081816'}
        alt="previewImg" 
      />}
    </div>
  );
}
