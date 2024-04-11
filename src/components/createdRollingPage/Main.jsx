import React from 'react';
import { styled } from 'styled-components';
import AddCard from './AddCard';
import Card from './Card';

function Main() {
  return (
    <Container>
      <CardContainer>
        <AddCard />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  );
}

const Container = styled.main`
  background-color: var(--Orange-200);
  display: flex;
  justify-content: center;
  padding: 80px 0 246px;
  height: 100%;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 16px;
`;

export default Main;
