import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { commentContext } from '../../../context/CommentContext';
import styles from './commentform.css';

export function CommentForm() {
  const {value, onChange} = useContext(commentContext);

  function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.stopPropagation();
    event.preventDefault();
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(value)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handelChange}/>
      <button type='submit' className={styles.button}>Комментировать</button>
    </form>
  );
}
