import React, {useState } from 'react';
import { generateId } from '../../../../../utils/js/generateRandomIndex';
import { GenericList } from '../../../../GenericList';
import { EIcons, Icon } from '../../../../Icon';
import styles from './menuitems.css';

const LIST= [
  {
    text:'Комметарий',
    svg: <Icon name={EIcons.comment} size = {15}/>,
    mobilFlag: false,
  },

  {
    text:'Поделиться',
    svg: <Icon name={EIcons.shared} size = {15}/>,
    mobilFlag: false,
  },
  {
    text:'Скрыть',
    svg: <Icon name={EIcons.hide} size = {15}/>,
    mobilFlag: true,
  },
  {
    text:'Сохранить',
    svg: <Icon name={EIcons.save} size = {15}/>,
    mobilFlag: false,
  },
  {
    text:'Пожаловаться',
    svg: <Icon name={EIcons.claim} size = {15}/>,
    mobilFlag: true,
  },
].map(generateId)


interface IMenuItemsProps {
  postId?: string
}

export function MenuItems({postId}: IMenuItemsProps) {
  const widthIsMobil = document.documentElement.clientWidth <= 1024;
  const [listMenu, setListMenu] = useState(widthIsMobil ? LIST.filter((item)=> item.mobilFlag === true) : LIST);

  return (
    <div className={styles.dropdown}>
      <ul className={styles.menuItemsList}>
        <GenericList postId = {postId} list={listMenu.map(item => 
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
