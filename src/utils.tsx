/* import { withKey } from './utils/react/withKey';
import React from 'react'

interface IblockProps extends Record<string, unknown> {
  title: string;
  id: string;
}

const withIdKey = withKey('id');

function Block(props: IblockProps){
  return(
    <div>{props.title}</div>
  )
}

function Feed(props: {blocks: IblockProps[]}){
  return(
    <div>
      {props.blocks.map(withIdKey(Block))}
    </div>
  )
} */

