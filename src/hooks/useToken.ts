import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { saveToken } from "../store/saveToken/tokenAction";
import { getTokenFromUrl } from "../utils/js/getTokenFromUrl";


export function useToken() {
  const dispatch = useDispatch();
  useEffect(()=> {
    const accesToken = getTokenFromUrl(window.location.hash);
    dispatch(saveToken(accesToken))
  },[window.location.hash])

}