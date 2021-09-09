import { ActionCreator, AnyAction, Reducer } from "redux";
import { IPostsData } from "../hooks/usePostsData";
import { IUserData } from "../hooks/useUserData";
import { MeRequestAction, MeRequestErrorAction, MeRequestSucceesAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/action";
import { meReducer, MeState } from "./me/reducer";
import { SAVE_TOKEN } from "./saveToken/tokenAction";
import { saveTokenReducer, TokenState } from "./saveToken/tokenReducer";

export type RootState ={
  commentText: string;
  postsData: IPostsData;
  userData: IUserData;
  me: MeState;
  saveToken : TokenState
  
}
const initialState: RootState = {
  commentText: "Hi!",
  saveToken:  {
    token: '',
    isToken: false,
  },

  postsData: [],
  userData: {
    name: "Anonim",
    iconImg: "",
  },
  me: {
    loading: false,
    error: '',
    data: {

    }
  },
 
}

const UPDATE_USER_DATA = 'UPDATE_USERDATE';
export const updateUserData: ActionCreator<AnyAction> = (userData) => ({
  type: UPDATE_USER_DATA,
  userData,
})

const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const updateComment: ActionCreator<AnyAction> = (text) => ({
  type: UPDATE_COMMENT, 
  text,
});

/* const SET_TOKEN = 'SET_TOKEN';
export const updateToken: ActionCreator<AnyAction> = (token)=> ({
  type: SET_TOKEN,
  token,
}) */

const UPDATE_POSTS = 'UPDATE_POSTS';
export const updatePosts: ActionCreator<AnyAction> = (postsData) => ({
  type: UPDATE_POSTS,
  postsData,
})
type MyAction = MeRequestAction | MeRequestSucceesAction | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction | any> =(state = initialState, action) => {
  switch(action.type){
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me,action),
      }
    case SAVE_TOKEN:
      return {
        ...state,
        saveToken: saveTokenReducer(state.saveToken, action)
      }
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      }
    case UPDATE_POSTS:
      return {
        ...state,
        postsData: action.postsData,
      }
   
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      }
    default:
      return state;
  }
  
}