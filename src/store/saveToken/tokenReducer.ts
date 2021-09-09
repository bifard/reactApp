import { Reducer } from "react"
import { SAVE_TOKEN, TokenSave } from "./tokenAction"

export type TokenState = {
  token: string,
  isToken: boolean,
}

export const saveTokenReducer: Reducer<TokenState, TokenSave> = (state, action) => {
  switch(action.type){
    case SAVE_TOKEN :
      return {
        ...state,
        token: action.token,
        isToken: true,
      }
  }
}

