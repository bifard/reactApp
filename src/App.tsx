import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';
import { generateId, assignId } from './utils/js/generateRandomIndex';


const LIST = [
  {As: 'li' as const,text:'some'},
  {As: 'li' as const,text:'other some'},
  {As: 'li' as const,text:'some'}
].map(generateId)


function AppComponent(){


  return(
    <Layout>
      <Header/>
      <Content>
        <CardList/>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);