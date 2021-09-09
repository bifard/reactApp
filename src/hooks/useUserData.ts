import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {  meRequestAsync, } from "../store/me/action";
import { RootState } from "../store/reducer";

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export function  useUserData(){
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(state => state.me.loading)
  const token = useSelector<RootState, string>(state => state.saveToken.token)
  const data = useSelector<RootState, IUserData >(state => state.me.data)
  useEffect(()=>{
    if(!token) return;
    dispatch(meRequestAsync());
  },[token]);
  return {
    data,
    loading
  }
}