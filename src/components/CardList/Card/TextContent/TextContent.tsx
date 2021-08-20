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
          src={authorAvatar || "https://cdn.dribbble.com/users/1247975/screenshots/16010207/media/969da6682bd27979407d6189521e62f8.jpg?compress=1&resize=1000x750" }
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
