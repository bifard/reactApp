import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';
import { ListFroDropdown } from './ListFroDropdown';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
const NOOP = () => {};
export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
  const [clientY, setClientY] = useState(0);


  React.useEffect(()=> {setIsDropdownOpen(isOpen)},[isOpen])
  React.useEffect(()=> {()=> { isDropdownOpen ? onOpen() : onClose() }},[isDropdownOpen])
 
  const handelOpen = (event?: React.MouseEvent<Element, MouseEvent>) => {
    setClientY(event?.clientY ? event?.pageY: 0);
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (<div className={styles.container}>
      <div onClick={handelOpen}>
        {button}
      </div>
      {isDropdownOpen && <ListFroDropdown onClick={()=>setIsDropdownOpen(!isDropdownOpen)} children={children} clientY = {clientY}/>}
    </div>);
  
}
