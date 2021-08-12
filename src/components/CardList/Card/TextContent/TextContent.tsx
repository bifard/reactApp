import React from 'react';
import styles from './cardcontent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img  
          className={styles.avatar} 
          src="https://cdn.dribbble.com/users/1247975/screenshots/16010207/media/969da6682bd27979407d6189521e62f8.jpg?compress=1&resize=1000x750" 
          alt="avatar" 
        />
        <a href="#user-url" className={styles.username}>Дмитрий</a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>Опублекованно  </span>
        4 hours ago
      </span>
    </div>
      <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo cum vel consectetur repudiandae explicabo ipsum tempore distinctio, molestiae officiis dolores recusandae maxime ad quae similique eius. Repellat eveniet eligendi nesciunt!
      </a>
    </h2>
  </div>
  );
}
