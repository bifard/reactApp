import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store"



export function useAuthorPostData(author:string){
  const token = useSelector<RootState, string>(state => state.token)
  const [authorAvatar, setAuthorAvatar] = useState('')
  useEffect(()=> {
    const cancelTokenSource = axios.CancelToken.source();
    if(author === '[deleted]') return;
    axios.get(`https://oauth.reddit.com/user/${author}/about.json?sr_detail=true`,
              { 
                cancelToken: cancelTokenSource.token,
                headers: { Authorization: `bearer ${token}` } 
              }
              )
              .then((res)=> setAuthorAvatar(res.data.data.snoovatar_img))
              .catch(console.log)
    return ()=> {
      cancelTokenSource.cancel();
    }
  })
  return [authorAvatar]
}