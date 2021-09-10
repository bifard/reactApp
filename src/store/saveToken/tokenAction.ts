import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";


export const SAVE_TOKEN = 'SAVE_TOKEN';
export type TokenSave = {
  type: typeof SAVE_TOKEN,
  token: string
}
type TThunkAction = ThunkAction<void, RootState, unknown, Action<string>>;

export const saveToken = (token:string): TThunkAction  => 
  (dispatch) => {
    dispatch({
      type: SAVE_TOKEN,
      token: token
    })
}

