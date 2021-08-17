import React, { useRef } from 'react';
import { IconAnon } from '../../../../icon/IconAnon';
import { Break } from '../../../Break';
import { EColor, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps{
  avatarSrc?: string
  username?: string
}

export function UserBlock({avatarSrc, username}:IUserBlockProps) {
  return (
    <a 
    href="https://www.reddit.com/api/v1/authorize?client_id=atrPvb5a7ujy5s8xNpAB0w&response_type=token&state=random_string&redirect_uri=http://localhost:3000/auth&scope=read submit identity"
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? <img src={avatarSrc} alt="userAvatar" className={styles.avatarImage} />
        : <IconAnon size={50}/>
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Anonymous'}</Text>
      </div>
    </a>
  );
}
