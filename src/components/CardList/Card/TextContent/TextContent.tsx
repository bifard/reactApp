import React, { useContext } from 'react';
import { AuthorPost } from '../AuthorPost';
import styles from './cardcontent.css';
import { Title } from './Title';
interface IPropsTextContent {
  preview?: string;
  title?:string;
  author:string;
  authorAvatar?: string;
  created_utc?: number;
  postID: string;
}
export function TextContent({authorAvatar, author, created_utc, title, preview, postID}:IPropsTextContent) {

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
    <Title postID = {postID} title = {title} preview = {preview}/>
  </div>
  );
}
