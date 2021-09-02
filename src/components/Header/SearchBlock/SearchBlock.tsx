import React from 'react';
import { useSelector } from 'react-redux';
import { IUserData, useUserData } from '../../../hooks/useUserData';
import { RootState } from '../../../store';

import styles from './searchblock.css';
import { UserBlock } from './UserBlock';


export function SearchBlock() {
  useUserData();
  const {iconImg, name} = useSelector<RootState, IUserData>(state => state.userData)
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name}/>
    </div>
  );
}
