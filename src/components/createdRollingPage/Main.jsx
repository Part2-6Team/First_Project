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
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Container>
  );
}

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);
  padding: 80px 0;
  min-height: 100%;
  height: auto;
`;

const CardContainer = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   gap: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  height: auto; /* 부모 요소의 높이를 자식 요소에 맞게 설정합니다. */
`;

export default Main;
