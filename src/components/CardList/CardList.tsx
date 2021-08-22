import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardlist.css';
import { generateId } from '../../utils/js/generateRandomIndex';
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
}

export function CardList() {
  const posts = useContext(postsContext).map(generateId);
  return (
     <ul className={styles.cardsList}>
        {posts && posts.map((item: IPostsCardList, index:number)=>
            <Card
              key = {item.id} 
              title = {item.title} 
              author = {item.author}
              preview = {item.preview}
              authorAvatar = {item.authorAvatar}
              created_utc = {item.created_utc}
              like = {item.like}
              numComments = {item.numComments}
            />
        )}
      </ul>
  );
}
