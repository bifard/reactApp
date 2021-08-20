import React from "react";

export interface IPostContext{
  title?:string;
  author?:string;
  preview?:string;
  authorID?: string;
  authorAvatar?: string;
  created_utc?: number;
  numComments?: number;
  like?: number;
}
export const postContext = React.createContext<IPostContext>({});