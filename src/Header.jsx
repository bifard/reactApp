import * as React from 'react';
import styles from './header.css';

export function Header() {
  return(
    <header>
      <h1 className = {styles.example}>Hello React</h1>
    </header>
  );
}