import React from 'react';
import { EIcons, Icon } from '../Icon';
import styles from './toreply.css';

export function ReplyButton() {
  return (
    <div className={styles.container}>
      <Icon size={14} name={EIcons.comment}/>
      <span className={styles.text}>Ответить</span>
    </div>
  );
}
