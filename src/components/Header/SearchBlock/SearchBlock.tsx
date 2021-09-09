import React from 'react';
import { useSelector } from 'react-redux';
import { IUserData, useUserData } from '../../../hooks/useUserData';
import { RootState } from '../../../store/reducer';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';


export function SearchBlock() {
  const {data, loading} = useUserData()
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading ={loading}/>
    </div>
  );
}
