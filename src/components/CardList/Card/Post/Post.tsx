import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentFormContainer } from '../../../CommentFormContainer';
import { ListComments } from '../ListComments';
import styles from './post.css';
interface IPropsPost {
  title?: string;
  preview?: string;
  onClose: () => void;
  postID: string;
}
export function Post({ title, onClose, preview, postID }: IPropsPost) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function hendleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
    }
    document.addEventListener('click', hendleClick);

    return () => {
      document.removeEventListener('click', hendleClick);
    }
  }, [])

  const node = document.querySelector(`#modal_root`);
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modalWarap}>
      <div className={styles.modal}  ref={ref} >
        <h2>{title}</h2>

        <div className={styles.content}>
         <img  src={preview} alt="" />
        </div>
        <CommentFormContainer />
        <ListComments postID = {postID}/>
      </div>
    </div>
  ),
    node
  );
}
