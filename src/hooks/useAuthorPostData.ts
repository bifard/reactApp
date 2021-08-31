import axios from "axios"
import { useEffect, useState } from "react"
import { useToken } from "./useToken"


export function useAuthorPostData(author:string){
  const[token] = useToken()
  const [authorAvatar, setAuthorAvatar] = useState('')
  useEffect(()=> {
    if(author === '[deleted]') return;
    axios.get(`https://oauth.reddit.com/user/${author}/about.json?sr_detail=true`,
              { headers: { Authorization: `bearer ${token}` } }
              )
              .then((res)=> setAuthorAvatar(res.data.data.snoovatar_img))
              .catch(console.log)
  })
  return [authorAvatar]
}