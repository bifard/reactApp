import React, { useState } from 'react';
import { StateType } from '../../../../../hooks/useCommentsData';
import { ModalReply } from '../../../../ModalReply';
import { AuthorPost } from '../../AuthorPost';
import styles from './comments.css';

export interface ICommentsProps {
  commentId: string;
  postId: string;
  author: string;
  text: string;
  replies: Array<StateType> | null;
  numReplies: number | null;
}
export function Comments({ text, author, postId, numReplies, replies }: ICommentsProps) {
  const [isOpenReplies, setIsOpenReplies] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerAuthor}>
        <AuthorPost author={author} />
        <div className={styles.hour}>1 hour ago</div>
      </div>
      <div className={styles.border}>
        <div className={styles.text}>
          {text}
        </div>
        
        {isOpenReplies && replies && replies.map((item) => {
          return <Comments key={item.commentId} commentId={item.commentId} author={item.author} text={item.text} postId={postId} numReplies={item.numReplies} replies={item.replies} />
        })}
      </div>

      <div>
          <ModalReply author={author}/>
      </div>

      <div className={styles.more}>
        {(numReplies) && <button onClick={() => setIsOpenReplies(!isOpenReplies)}>{(isOpenReplies) ? 'Show' : `${numReplies} more replies`}</button>}
      </div>

      

      
    </div>
  );
}
