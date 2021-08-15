import React from 'react';
import styles from './genericlist.css';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  svg?: React.ReactNode;
  dividerClassName?: string;
  
}

interface IGenericListProps{
  list: IItem[];
  postId?:string;
}

const noop = () => {}; 
export function GenericList({list, postId}: IGenericListProps) {
  return (
    <>
      {
        list.map(({As = 'div', text, onClick = noop, className, id, href, svg, dividerClassName}) => (
          <As
            onClick = {() => onClick(postId || id)}
            key = {id}
            href = {href}
          >

            <div  className = {className}>
              { svg && svg}
              <span>{text}</span> 
            </div>
            {dividerClassName && <div className={dividerClassName}></div>}

          </As>
        ))
      }
    </>
  );
}
