import React from 'react';
import { Card } from './Card/Card';
import styles from './cardlist.css';

export function CardList() {
  return (
    <ul className={styles.cardsList}>
      <Card></Card>
    </ul>
  );
}
