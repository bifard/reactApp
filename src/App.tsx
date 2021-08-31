import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './components/context/tokenContext';
import { UserContextProvider } from './components/context/userContext';
import { PostContextProvider } from './components/context/postsContext';
import { commentContext } from './components/context/CommentContext';

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');
  const CommentContextProvider = commentContext.Provider;
  return (

    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <CommentContextProvider value={{
          value: commentValue,
          onChange: setCommentValue,
        }}>
          <Layout >
            <Header />
            <PostContextProvider>
              <Content>
                <Route exact path="/" />
                <CardList></CardList>
              </Content>
            </PostContextProvider>
          </Layout>
        </CommentContextProvider>
      </UserContextProvider>
    </tokenContext.Provider>

  );
}

export const App = AppComponent;
/* export const App = hot(() => <AppComponent/>); */

