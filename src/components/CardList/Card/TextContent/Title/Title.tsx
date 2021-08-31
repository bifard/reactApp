import React, { useState } from 'react';
import { Post } from '../../Post';
import styles from './title.css';

export function Title({title, preview, postID}:{title?:string; preview?:string, postID:string}) {
  const [isOpenModal, setIsModalOpen] = useState(false)
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => { setIsModalOpen(true)}}>
      {title}
      </a>
      {isOpenModal && (
        <Post postID = {postID} title= {title} preview={preview} onClose={()=> setIsModalOpen(false)}/>
      )}
    </h2>
  );
}
