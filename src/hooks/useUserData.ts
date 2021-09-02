import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateUserData } from "../store";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(){
  const dispatch = useDispatch();
  const token = useSelector<RootState, string>(state => state.token)

  useEffect(()=>{
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}`}
    })
    .then((res)=>{
      console.log(res)
      const userData = res.data;
      console.log(userData,'asd')
      dispatch(updateUserData({name: userData.name, imgSrc: userData.icon_img}))
    })
    .catch(console.log)
  },[token]);
}