import React from 'react';
import { styled } from 'styled-components';

const CardListTitleText = {
  Text1: '인기 롤링 페이퍼🔥',
  Text2: '최근에 만든 롤링 페이퍼⭐',
};

function CardListTitle({ textType }) {
  return (
    <CardListTitleStyled>{CardListTitleText[textType]}</CardListTitleStyled>
  );
}

const CardListTitleStyled = styled.div`
  color: var(--Black);
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  margin-top: 50px;
  margin-right: auto;
  margin-left: 150px;

  @media (max-width: 1024px) {
    padding: 0;
    margin-right: auto;
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-right: auto;
    margin-left: 20px;
  }
`;

export default CardListTitle;
