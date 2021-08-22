import React, { useContext } from 'react';
import { postContext } from '../../../context/postContext';
import styles from './cardcontent.css';

export function TextContent() {
 const {title,author,authorAvatar, created_utc} = useContext(postContext)
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img  
          className={styles.avatar} 
          src={authorAvatar || "https://www.redditstatic.com/avatars/avatar_default_19_0DD3BB.png" }
          alt="avatar" 
        />
        <a href="#user-url" className={styles.username}>{author}</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>Опублекованно  </span>
        {created_utc} hours ago
      </span>
    </div>
      <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
      {title}
      </a>
    </h2>
  </div>
  );
}
