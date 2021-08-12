import React, { useState } from 'react';
import styles from './dropdown.css';

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

  React.useEffect(()=> {setIsDropdownOpen(isOpen)},[isOpen])
  React.useEffect(()=> {()=> { isDropdownOpen ? onOpen() : onClose() }},[isDropdownOpen])

  const handelOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className={styles.container}>
      <div onClick={handelOpen}>
        {button}
      </div>

      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={()=> setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
