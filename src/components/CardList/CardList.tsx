import React, { useEffect, useState } from 'react';
import { Card } from './Card/Card';
import styles from './cardlist.css';

import { Loader } from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updatePosts } from '../../store/reducer';
import { IPostsData, usePostsData } from '../../hooks/usePostsData';
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
  usePostsData();
  const posts = useSelector<RootState, IPostsData>(state => state.postsData)
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
        { posts.length > 0 && posts.map((item)=>
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
