/* eslint-disable import/named */
import React from 'react';
import './color-list.css';
import { Layout } from './ListPageUi/Layout';
import { ListPage } from './ListPageUi/ListPage';
import { Header } from './ListPageUi/Header';
import { CardListTitle } from './ListPageUi/CardListTitle';
import { CardList } from './ListPageUi/CardList';
import { Button } from './ListPageUi/Button';

function App() {
  return (
    <Layout>
      <ListPage>
        <Header />
        <CardListTitle />
        <CardList />
        <Button PageName="listPage" />
      </ListPage>
    </Layout>
  );
}

export default App;
