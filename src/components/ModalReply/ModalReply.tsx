import axios from 'axios';
import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { useToken } from '../../hooks/useToken';
import { CloseIcon } from '../../icon/CloseIcon';
import { stopPropagation } from '../../utils/react/stopPropagation';
import { tokenContext } from '../context/tokenContext';
import { EIcons, Icon } from '../Icon';
import { ReplyButton } from '../ToReply/ReplyButton';
import styles from './modalreply.css';

export function ModalReply({ author, commentName }: { author: string, commentName:string }) {
  const token = useContext(tokenContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (modalIsOpen) {
      ref.current?.focus();
      ref.current!.selectionStart = ref.current!.value.length
    }
  }, [modalIsOpen])

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('api_type', 'json');
    formData.append('thing_id', commentName);
    formData.append('text', ref.current!.value);
    
    axios({
      method:'POST',
      url:'https://oauth.reddit.com/api/comment.json',
      data:formData,
      headers:{
        'Content-Type' : 'multipart/form-data',
        Authorization: `bearer ${token}`,
      }
    }
    )
    .then((res)=> {
      if(res.data.json.errors.length){
        alert(res.data.json.errors[0][1])
      }else{
        alert('Ok!')
        setModalIsOpen(false)
      }
    })
    .catch(console.log)
  }

  return (
    <div>
      {!modalIsOpen &&
        <button onClick={stopPropagation(() => setModalIsOpen(true))}>
          <ReplyButton />
        </button>
      }

      {modalIsOpen &&
        <div className={styles.container}>
          <div className={styles.containerForm}>
            <form id={'replies'} className={styles.form} onSubmit={handleSubmit} >
              <textarea defaultValue={`${author}, `} ref={ref} className={styles.textarea} />
            </form>
          </div>
          <div className={styles.conteinerButton}>
            <button onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setModalIsOpen(false)
            }}>
              <Icon name={EIcons.close} size={13} />
            </button>
            <button form={'replies'} type='submit'>Ответить</button>
          </div>
        </div>
      }
    </div>
  );
}
