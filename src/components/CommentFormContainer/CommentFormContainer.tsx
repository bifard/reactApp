import React, { ChangeEvent, FormEvent} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { RootState, updateComment } from '../../store';
import { CommentForm } from '../CardList/Card/CommentForm';


export function CommentFormContainer() {
 /*  const store = useStore<RootState>();
  const value = store.getState().commentText; */
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();



  function handelChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.stopPropagation();
    event.preventDefault();
    /* dispatch({type: 'UPDATE_COMMENT', text: event.target.value}) */
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    console.log(value)
  }
  return (
    <CommentForm 
      value={value}
      onChange={handelChange}
      onSubmit={handleSubmit}
    />
  );
}
