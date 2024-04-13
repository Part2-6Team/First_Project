import React from 'react';
import { styled } from 'styled-components';

import Header from '../components/createdRollingPage/Header';
import Main from '../components/createdRollingPage/Main';

function CreatedRolloingPage() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 68px);
`;

export default CreatedRolloingPage;
