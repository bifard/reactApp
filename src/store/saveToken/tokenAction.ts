import { ActionCreator } from "redux";


export const SAVE_TOKEN = 'SAVE_TOKEN';
export type TokenSave = {
  type: typeof SAVE_TOKEN,
  token: string
}
export const saveToken: ActionCreator<TokenSave> = (token:string) => ({
  type: SAVE_TOKEN,
  token: token
})

