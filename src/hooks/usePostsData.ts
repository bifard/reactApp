import axios from "axios";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updatePosts } from "../store";
import { generateId } from "../utils/js/generateRandomIndex";
import { getHoursAgo } from "../utils/js/getHoursAgo";

export interface IPosts{
  title:string;
  author:string;
  preview:string;
  authorID?: string;
  authorAvatar: string;
  created_utc: number;
  like: number,
  numComments: number,
  id?:string
  postID: string;
}
export interface IPostsData extends Array<IPosts>{
  [K: number]: IPosts;
}


export function usePostsData(){
  const token = useSelector<RootState, string>(state => state.token)

  const dispatch = useDispatch();
  useEffect(()=> {
 
    axios.get('https://oauth.reddit.com/r/popular/best.json?sr_detail=true',{
      headers: { Authorization: `bearer ${token}`}
    })
    .then((res)=> {
      return res.data.data.children.map((item:any)=>{
        return {
          title:item.data.title,
          preview: (item.data.url.indexOf('.jpg') !== -1) ? item.data.url: undefined ,
          author: item.data.author,
          authorAvatar: item.data.sr_detail.icon_img,
          created_utc: getHoursAgo(item.data.created_utc) ,
          like: item.data.score,
          numComments: item.data.num_comments,
          postID: item.data.id
        }
      })
      .map(generateId); 
    })
    .then((data) => {
      dispatch(updatePosts(data))
    })
    .catch(console.log)
   
  }, [])
}