import React, { useEffect, useState } from 'react';
import { ClaimIcon } from '../../../../../icon/menuIcon/ClaimIcon';
import { CommentIcon } from '../../../../../icon/menuIcon/CommentIcon';
import { HideIcon } from '../../../../../icon/menuIcon/HideIcon';
import { SaveIcon } from '../../../../../icon/menuIcon/SaveIcon';
import { SharedIcon } from '../../../../../icon/menuIcon/SharedIcon';
import { generateId } from '../../../../../utils/js/generateRandomIndex';
import { GenericList } from '../../../../GenericList';
import styles from './menuitems.css';

const LIST= [
  {
    text:'Комметарий',
    svg: <CommentIcon/>,
    mobilFlag: false,
  },

  {
    text:'Поделиться',
    svg: <SharedIcon/>,
    mobilFlag: false,
  },
  {
    text:'Скрыть',
    svg: <HideIcon/>,
    mobilFlag: true,
  },
  {
    text:'Сохранить',
    svg: <SaveIcon/>,
    mobilFlag: false,
  },
  {
    text:'Пожаловаться',
    svg: <ClaimIcon/>,
    mobilFlag: true,
  },
].map(generateId)




export function MenuItems() {
  const widthIsMobil = document.documentElement.clientWidth <= 1024;
  const [listMenu, setListMenu] = useState(widthIsMobil ? LIST.filter((item)=> item.mobilFlag === true) : LIST);

  
  return (
    <div className={styles.dropdown}>
      <ul className={styles.menuItemsList}>
        <GenericList list={listMenu.map(item => 
          ({...item, 
            As:'li', 
            className:`${styles.menuItem}`, 
            dividerClassName: `${styles.divider}`, 
            onClick: (id)=>{console.log(id)
          }}))}/>
      </ul>
      <button className={styles.closeButton}>Закрыть</button>
    </div>
  );
}
