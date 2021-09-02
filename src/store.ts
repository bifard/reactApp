import { ActionCreator, AnyAction, Reducer } from "redux";
import { IPostsData } from "./hooks/usePostsData";
import { IUserData } from "./hooks/useUserData";

export type RootState ={
  commentText: string;
  token: string;
  postsData: IPostsData;
  userData: IUserData;
}
const initialState = {
  commentText: "Hi!",
  token: '',
  postsData: [],
  userData: {
    name: "Anonim",
    iconImg: "",
  }
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

const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const updateToken: ActionCreator<AnyAction> = (token)=> ({
  type: UPDATE_TOKEN,
  token,
})

const UPDATE_POSTS = 'UPDATE_POSTS';
export const updatePosts: ActionCreator<AnyAction> = (postsData) => ({
  type: UPDATE_POSTS,
  postsData,
})

export const rootReducer: Reducer<RootState> =(state = initialState, action) => {
  switch(action.type){
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
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.token,
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