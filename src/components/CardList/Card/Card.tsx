import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';

interface IPropsCard{
  title?:string;
  author:string;
  preview?:string;
  authorID?: string;
  authorAvatar?: string;
  created_utc?: number;
  id?: string;
  like?: number;
  numComments?: number;
  postID: string;
}

export function Card({title, author, preview, authorAvatar, created_utc, id, like, numComments, postID}:IPropsCard) {
  
  return (
    <li className={styles.card}>
      <TextContent  title ={title} author = {author} authorAvatar = {authorAvatar} created_utc = {created_utc} preview ={preview} postID = {postID}/>
      <Preview preview = {preview} />
      <Menu/>
      <Controls like = {like} numComments = {numComments}/>
    </li>
  );
}
