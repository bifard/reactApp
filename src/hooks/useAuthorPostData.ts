import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/reducer"



export function useAuthorPostData(author:string){
  const token = useSelector<RootState, string>(state => state.saveToken.token)
  const [authorAvatar, setAuthorAvatar] = useState('')
  useEffect(()=> {
    if(author === '[deleted]') return;
    axios.get(`https://oauth.reddit.com/user/${author}/about.json?sr_detail=true`,
              { 
                headers: { Authorization: `bearer ${token}` } 
              }
              )
              .then((res)=> setAuthorAvatar(res.data.data.snoovatar_img))
              .catch(console.log)
  })
  return [authorAvatar]
}