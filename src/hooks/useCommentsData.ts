import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../components/context/tokenContext";
import { getHoursAgo } from "../utils/js/getHoursAgo";
import { useToken } from "./useToken";

type ResponseType = [
  object,
  {
    data: {
      children: [
        {
          data: ResDateType;
        }
      ]
    }
  }
]
type ResDateType = {
  author: string;
  id: string;
  body: string;
  created_utc: number;
  name: string;
  replies: {
    data: {
      children: [
        {
          data: ResDateType;
        }
      ]
    }
  }
}
export type StateType = {
  author: string;
  commentId: string;
  text: string;
  commentName: string;
  created_utc: number;
  numReplies: number | null;
  replies: StateType[] | null

}

export function useCommentsData(postID: string) {
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get<ResponseType>(`https://oauth.reddit.com/comments/${postID}.json?sr_detail=true`, {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((res) => {
        console.log(res.data)
        return res.data[1].data.children;
      })
      .then((res) => {
        return res.map(parseData)
      })
      .then((data)=> {
        return setComments(data)
      })
  }, [])
  const [comments, setComments] = useState<StateType[]>();
  return [comments];
}

function parseData(item:{data: ResDateType;}):StateType{
  item.data.replies?.data?.children.pop()
  const isReplies:boolean = item.data.replies?.data?.children && item.data.replies.data.children.length > 0;
  return {
    commentName: item.data.name,
    author: item.data.author,
    commentId: item.data.id,
    text: item.data.body,
    replies: isReplies  ? item.data.replies.data.children.map(parseData) : null,
    numReplies: isReplies ? item.data.replies.data.children.length : null,
    created_utc: getHoursAgo(item.data.created_utc),
  }
}