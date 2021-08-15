import classNames from 'classnames';
import React from 'react';
import styles from './text.css';

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'rayF4',
  greyF3 = 'reyF3',
  greyEC = 'reyEC',
  greyD9 = 'reyD9',
  greyC4 = 'reyC4',
  grey99 = 'rey99',
  grey66 = 'rey66',
}

type TSize = 28|20|16|14|12|10;

interface ITextProps{
  As?: 'span'|'h1'|'h2'|'h3'|'h4'|'p'|'div';
  children?: React.ReactNode;
  size: TSize;
  mobilSize?: TSize;
  tabletSize?: TSize;
  desctopSize?: TSize;
  color?: EColor;
  bold?: boolean;
  upperCase?: boolean;
}

export function Text(props: ITextProps) {
  const {   
    As = 'span', 
    children,  
    size, 
    mobilSize, 
    tabletSize, 
    desctopSize, 
    color = EColor.black,
    bold = false,
    upperCase = false,
  } = props;

  const classes = classNames(
    styles[`s${size}`],
    {[styles.bold] : bold},
    {[styles.upperCase] : upperCase},
    { [styles[`m${mobilSize}`]] : mobilSize },
    { [styles[`m${tabletSize}`]] : tabletSize },
    { [styles[`m${desctopSize}`]] : desctopSize },
    styles[color],
  );
  return (
    <As className ={classes}>
      {children}
    </As>
  );
}
