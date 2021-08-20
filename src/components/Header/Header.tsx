import React, { useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitile } from './ThreadTitile';

export function Header() {

  return (
    <header className={ styles.header }>
      <SearchBlock/>     
      <ThreadTitile/>
      <SortBlock/>
    </header>
  );
}
