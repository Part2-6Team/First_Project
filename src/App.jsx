import React from 'react';
import './color.css';
import Layout from './components/Layout';
import ListPage from './components/ListPage';
import Button from './components/Button';

function App() {
  return (
    <Layout>
      <ListPage>
        <Button />
      </ListPage>
    </Layout>
  );
}

export default App;
