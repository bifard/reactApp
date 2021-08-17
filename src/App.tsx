import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';

function AppComponent(){
  return(
    <BrowserRouter>
      <Layout >
        <Header/>
        <Content>
          <CardList/>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

/* export const App = hot(() => <AppComponent/>); */

export const App = AppComponent;