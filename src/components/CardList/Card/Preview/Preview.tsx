import React, { useContext } from 'react';
import styles from './preview.css';

export function Preview({preview}:{preview?:string}) {
  
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
