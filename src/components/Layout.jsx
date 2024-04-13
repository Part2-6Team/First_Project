import React from 'react';
import GlobalNav from './GlobalNav';
import ListPage from './ListPage';

function Layout() {
  return (
    <div>
      <GlobalNav hasButton />
      <ListPage />
    </div>
  );
}

export default Layout;
