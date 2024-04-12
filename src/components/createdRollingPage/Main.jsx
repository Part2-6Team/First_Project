import React from 'react';
import { styled } from 'styled-components';

import AddCard from './AddCard';
import Card from './Card';
import device from '../../config';

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
          <Card />
          <Card />
        </CardContainer>
      </Container>

      {/* Url을 카피했을 경우 UrlCopyPhrases가 위치할 자리 */}

      {/* 모달이 존재할때 카드 모달이 위치할 자리 */}
    </>
  );
}

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  padding: 80px 0;
  min-height: 100%;
  height: auto;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: brightness(100%);

  @media ${device.mobile} {
    padding: 80px 24px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 24px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Main;
