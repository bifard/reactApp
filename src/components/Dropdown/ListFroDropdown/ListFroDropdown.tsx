import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { stopPropagation } from '../../../utils/react/stopPropagation';
import styles from './listfrodropdown.css';

export function ListFroDropdown({clientY, children, onClick}:{clientY:number, children: React.ReactNode, onClick:()=> void}) {
  const positionStyle = {
    top: clientY,
  }
  const node = document.getElementById('dropdown_root');

  if(!node) return null;

  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    function hendleClick(event: MouseEvent){
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClick();
      }
    } 
    document.addEventListener('click', hendleClick )
    return () => document.removeEventListener('click', hendleClick)
  })
  
  
  return ReactDOM.createPortal((
    <div ref={ref} className={styles.listContainer}  style={positionStyle} >
        <div className={styles.list} onClick = {stopPropagation(onClick)}>
          {children}
        </div>
    </div>
  ),
  node
  );
}
