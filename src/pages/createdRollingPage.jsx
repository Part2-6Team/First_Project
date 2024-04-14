import React from 'react';
import { styled } from 'styled-components';

import Header from '../components/createdRollingPage/Header';
import Main from '../components/createdRollingPage/Main';
import GlobalNav from '../components/GlobalNav';

function CreatedRolloingPage() {
  return (
    <Container>
      <GlobalNav />
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 68px);
`;

export default CreatedRolloingPage;
