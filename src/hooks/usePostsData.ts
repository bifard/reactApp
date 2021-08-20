import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHoursAgo } from "../utils/js/getHoursAgo";
import { useToken } from "./useToken";

export interface IPosts{
  title:string;
  author:string;
  preview:string;
  authorID?: string;
  authorAvatar: string;
  created_utc: number;
  like: number,
  numComments: number,
}
export interface IPostsData extends Array<IPosts>{
  [K: number]: IPosts;
}


export function usePostsData(){
  const token = useToken();
  const [posts, setPost] = useState<IPostsData>([])
  useEffect(()=> {
    axios.get('https://oauth.reddit.com/best.json?limit=30&sr_detail=true',{
      headers: { Authorization: `bearer ${token}`}
    })
    .then((res)=> {
      const postData = res.data.data.children.map((item:any)=>{
        return {
          title:item.data.title,
          preview: item.data.sr_detail.banner_img,
          author: item.data.author,
          authorAvatar: item.data.sr_detail.icon_img,
          created_utc:getHoursAgo(item.data.created_utc) ,
          like: item.data.score,
          numComments: item.data.num_comments,
        }
      });
      setPost(postData);
    })
    .catch(console.log)
  }, [])
  return [posts];
}