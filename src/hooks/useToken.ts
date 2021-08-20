import { useEffect, useState } from "react";
import { getTokenFromUrl } from "../utils/js/getTokenFromUrl";


export function useToken() {
  const [token, setToken] = useState('');
  
  useEffect(()=> {
    const accesToken = getTokenFromUrl(window.location.hash);
    setToken(accesToken)
  },[token])
  return [token];
}