import React from "react";
import { usePostsData } from "../../hooks/usePostsData";
import { IPostsData} from "../../hooks/usePostsData";

export const postsContext = React.createContext<IPostsData>([]);

export function PostContextProvider({children}:{children: React.ReactNode}) {
  const [postsData] = usePostsData();
  return(
      <postsContext.Provider value={postsData}>
       {children}
      </postsContext.Provider>  
  );
}