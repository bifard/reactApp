import React from 'react';
import { assoc } from '../../../../utils/js/assoc';
import { generateId } from '../../../../utils/js/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import styles from './menu.css';
import { MenuItems } from './MenuItems';



export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown  button ={ButtonMenu()}>
          <MenuItems />
      </Dropdown>
    </div>
    );
};

function ButtonMenu() {
  return (
      <button className={styles.menuButton}>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
        </svg>
      </button>
      )}