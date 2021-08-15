import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { CardList } from './components/CardList';
import { EColor, Text } from './components/Text';
import { Break } from './components/Break';
import { Icon, EIcons} from './components/Icon';
import { ClaimIcon} from './icon/menuIcon/ClaimIcon';




function AppComponent(){


  return(
    <Layout >
      <Header/>
      <Content>
        <CardList/>
        <Icon name={EIcons.comment} size={15}></Icon>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);