import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducer';
import { EIcons, Icon } from '../../Icon';
import styles from './form.css';


export function Form({ author, commentName, setModal }: { author: string, commentName: string, setModal: React.Dispatch<React.SetStateAction<boolean>> }) {
  const token = useSelector<RootState, string>(state => state.saveToken.token)
  const ref = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState(`${author}, `)

  useEffect(() => {
    ref.current?.focus();
    ref.current!.selectionStart = ref.current!.value.length;
  })

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('api_type', 'json');
    formData.append('thing_id', commentName);
    formData.append('text', value);

    axios({
      method: 'POST',
      url: 'https://oauth.reddit.com/api/comment.json',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `bearer ${token}`,
      }
    }
    )

      .then((res) => {
        if (res.data.json.errors.length) {
          alert(res.data.json.errors[0][1])
        } else {
          alert('Ok!')
          setModal(false)
        }
      })
      .catch(console.log)
  }
  function hendleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
    event.target.style
  }
 

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <form id={'replies'} className={styles.form} onSubmit={handleSubmit} >
          <textarea value={value} ref={ref} className={styles.textarea} onChange={hendleChange} />
        </form>
      </div>
      <div className={styles.conteinerButton}>
        <button onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setModal(false)
        }}>
          <Icon name={EIcons.close} size={13} />
        </button>
        <button form={'replies'} type='submit'>Ответить</button>
      </div>
    </div>
  );
}
