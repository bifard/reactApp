import React, { useContext } from 'react';
import { AuthorPost } from '../AuthorPost';
import styles from './cardcontent.css';
interface IPropsTextContent {
  title?:string;
  author?:string;
  authorAvatar?: string;
  created_utc?: number;
}
export function TextContent({authorAvatar, author, created_utc, title}:IPropsTextContent) {

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <AuthorPost 
          authorAvatar = {authorAvatar} 
          author = {author}
        />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>Опублекованно</span>
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
