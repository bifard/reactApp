import React from 'react';
import { Route} from 'react-router-dom';
import './main.global.css';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';
import { useToken } from './hooks/useToken';


function AppComponent() {
  useToken()
  return (
     <Layout >
      <Header />
        <Content>
          <Route exact path="/" />
          <CardList></CardList>
        </Content>
    </Layout>
  );
}

export const App = AppComponent;
/* export const App = hot(() => <AppComponent/>); */

