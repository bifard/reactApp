import React, { useEffect, useState } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';
import { getTokenFromUrl } from './utils/js/getTokenFromUrl';
import { useToken } from './hooks/useToken';
import { tokenContext } from './components/context/tokenContext';
import { UserContextProvider } from './components/context/userContext';
import { PostContextProvider } from './components/context/postsContext';

function AppComponent(){
  const [token] = useToken();
  console.log("AppComponent")
  return(
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout >
          <Header/>
          <PostContextProvider>
            <Content>
              <Route exact path="/"  />
              <CardList></CardList>
            </Content>
          </PostContextProvider>
        </Layout>
      </UserContextProvider>
     </tokenContext.Provider>
  );
}

export const App = AppComponent;
/* export const App = hot(() => <AppComponent/>); */

