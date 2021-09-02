import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "../store";
import { getTokenFromUrl } from "../utils/js/getTokenFromUrl";


export function useToken() {
  const dispatch = useDispatch();
  useEffect(()=> {
    const accesToken = getTokenFromUrl(window.location.hash);
    dispatch(updateToken(accesToken))
  },[window.location.hash])

}