import React, { useContext, useEffect, useState } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardlist.css';

import { Loader } from '../Loader';
export interface IPostsCardList {
  title?:string;
  author?:string;
  preview?:string;
  authorID?: string;
  authorAvatar?: string;
  created_utc?: number;
  id: string;
  like?: number;
  numComments?: number;
  postID: string;
}

export function CardList() {
  const posts = useContext(postsContext);
  const [isLoad, setIsLoad] = useState(false)
  
  useEffect(()=>{
    if(posts.length != 0) setIsLoad(true)
  },[posts])
  return (
     <ul className={styles.cardsList}>
       {!isLoad &&
        <div>
          <Loader/>
          <Loader/>
          <Loader/>
          <Loader/>
        </div>
       }
        { posts && posts.map((item)=>
            <Card
              key = {item.id} 
              title = {item.title} 
              author = {item.author}
              preview = {item.preview}
              authorAvatar = {item.authorAvatar}
              created_utc = {item.created_utc}
              like = {item.like}
              numComments = {item.numComments}
              postID = {item.postID}
            />
        )}
      </ul>
  );
}
