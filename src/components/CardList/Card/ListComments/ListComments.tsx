import React, { useEffect, useState } from 'react';
import { useCommentsData } from '../../../../hooks/useCommentsData';
import { Loader } from '../../../Loader';
import { Comments } from './Comments';
import styles from './listcomments.css';




/* `https://oauth.reddit.com/user/CrooklynKnight/about.json?sr_detail=true` */

export function ListComments({postID}:{postID:string}) {
  const [comments] = useCommentsData(postID);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(()=>{
    if(comments) setIsLoad(true)
    
  },[comments])
  return (

    <div>
      {!isLoad && 
        <div className={styles.loader}>
          <Loader/>
          <Loader/>
          <Loader/>
        </div>}

      {isLoad && comments &&
        comments.map((item)=>{
          return !item.author? <button key = {item.commentId}>More...</button> :
          <Comments 
          author = {item.author} 
          key = {item.commentId} 
          text = {item.text}
          replies = {item.replies}
          commentId = {item.commentId}
          commentName = {item.commentName}
          postId = {postID}
          numReplies = {item.numReplies}
        />})
      }
    </div>
  );
}

