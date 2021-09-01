import React, {useEffect,  useState } from 'react';
import { stopPropagation } from '../../utils/react/stopPropagation';
import { ReplyButton } from '../ToReply/ReplyButton';
import { Form } from './Form';


export function ModalReply({ author, commentName }: { author: string, commentName:string }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

/*   useEffect(() => {
    if (modalIsOpen) {
      ref.current?.focus();
      ref.current!.selectionStart = ref.current!.value.length
    }
  }, [modalIsOpen]) */

  return (
    <div>
      {!modalIsOpen &&
        <button onClick={stopPropagation(() => setModalIsOpen(true))}>
          <ReplyButton />
        </button>
      }

      {modalIsOpen &&
        <Form author={author} commentName={commentName} setModal={setModalIsOpen}/>
      }
    </div>
  );
}
