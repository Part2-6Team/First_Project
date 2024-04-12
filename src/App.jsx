/* eslint-disable import/named */
import React from 'react';
import './color.css';
import { Layout } from './components/Layout';
import { ListPage } from './components/ListPage';
import { Header } from './components/GlobalNav';
import { CardListTitle } from './components/CardListTitle';
import { CardList } from './components/CardList';
import { Button } from './components/Button';

function App() {
  return (
    <Layout>
      <ListPage>
        <Header />
        <CardListTitle textType="Text1" />
        <CardList />
        <CardListTitle textType="Text2" />
        <CardList />
        <Button PageName="listPage" />
      </ListPage>
    </Layout>
  );
}

export default App;
