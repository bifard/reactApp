import classNames from 'classnames';
import React from 'react';
import styles from './break.css';
type TBreakSize = 4|8|12|16|20;
type TDisplays = 'mobil'| 'tablet' | 'desctop';
interface IBreakProps{
  size: TBreakSize;
  mobilSize?: TBreakSize;
  tabletSize?: TBreakSize;
  desctopSize?: TBreakSize;
  inLine?: boolean;
  top?: boolean;
}
export function Break(props: IBreakProps) {
  const {  
    size,
    mobilSize,
    tabletSize,
    desctopSize,
    inLine = false,
    top = false,
  } = props;
  return (
    <div
      className = {classNames(
        styles[`s${size}`],
        { [styles[`m${mobilSize}`]] : mobilSize },
        { [styles[`m${tabletSize}`]] : tabletSize },
        { [styles[`m${desctopSize}`]] : desctopSize },
        { [styles.inLine] : inLine },
        { [styles.top] : top },
    )}>

    </div>
  );
}
