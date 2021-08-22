import React from 'react';
import styles from './authorpost.css';

export function AuthorPost({authorAvatar, author}: {authorAvatar?:string; author?:string}) {
  return (
    <div className={styles.userLink}>
      <img  
        className={styles.avatar} 
        src={authorAvatar || "https://www.redditstatic.com/avatars/avatar_default_19_0DD3BB.png" }
        alt="avatar" 
      />
      <a href="#user-url" className={styles.username}>{author}</a>
    </div>
  );
}
