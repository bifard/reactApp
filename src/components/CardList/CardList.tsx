import React, { useContext } from 'react';
import {IPostContext} from '../context/postContext'
import { postsContext } from '../context/postsContext';
import { postContext } from '../context/postContext';
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
}

export function CardList() {
  const posts = useContext(postsContext).map(generateId);
  return (
     <ul className={styles.cardsList}>
        {posts && posts.map((item: IPostsCardList, index:number)=>
          <postContext.Provider key={item.id} value={item} >
            <Card/>
          </postContext.Provider>
        )}
      </ul>
  );
}
