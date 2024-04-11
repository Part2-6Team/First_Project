import React from 'react';
import { styled } from 'styled-components';

import AddCard from './AddCard';
import Card from './Card';
import UrlCopyPhrases from './UrlCopyPharases';
import CardModal from './CardModal';

function Main() {
  return (
    <>
      <Container>
        <CardContainer>
          <AddCard />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <UrlCopyPhrases />
      </Container>

      {/* 모달이 존재할때만 랜더링 */}
      {/* <CardModal /> */}
    </>
  );
}

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);

  display: flex;
  justify-content: center;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: brightness(100%);
  padding: 80px 0;
  min-height: 100%;
  height: auto;

  @media (max-width: 800px) {
    padding: 80px 24px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 24px;

  @media (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Main;
