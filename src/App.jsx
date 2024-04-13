import React from 'react';
import './color.css';
import Layout from './components/Layout';
import ListPage from './components/ListPage';
import GlobalNav from './components/GlobalNav';
import CardListTitle from './components/CardListTitle';
import CardList from './components/CardList';
import Button from './components/Button';

function App() {
  return (
    <Layout>
      <ListPage>
        <GlobalNav />
        <CardListTitle />
        <CardList />
        <CardListTitle />
        <CardList />
        <Button />
      </ListPage>
    </Layout>
  );
}

export default App;
