import React from 'react';
import { ClaimIcon } from '../../icon/menuIcon/ClaimIcon';
import { CommentIcon } from '../../icon/menuIcon/CommentIcon';
import { HideIcon } from '../../icon/menuIcon/HideIcon';
import { SaveIcon } from '../../icon/menuIcon/SaveIcon';
import { SharedIcon } from '../../icon/menuIcon/SharedIcon';

export enum EIcons{
  claim = 'ClaimIcon',
  comment = 'CommentIcon',
  hide = 'HideIcon',
  save = 'SaveIcon',
  shared = 'SharedIcon',
}
interface IICONS {
  [n: string]: React.ReactElement;
}
interface IIconProps {
  name: EIcons;
  size: number;
}

export function Icon({name,size}:IIconProps) {
  const ICONS:IICONS ={
    'ClaimIcon': <ClaimIcon size={size}/>,
    'CommentIcon': <CommentIcon size={size}/>,
    'HideIcon': <HideIcon size={size}/>,
    'SaveIcon': <SaveIcon size={size}/>,
    'SharedIcon': <SharedIcon size={size}/>,
  }
  return  ICONS[name]
}