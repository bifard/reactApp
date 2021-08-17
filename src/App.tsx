import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';

function AppComponent(){
  return(
    <Layout >
      <Header/>
        <Content>
            <Route exact path="/"  />
            <Route exact path="/auth" component={CardList} />
        </Content>
    </Layout>
  );
}

export const App = AppComponent;
/* export const App = hot(() => <AppComponent/>); */

