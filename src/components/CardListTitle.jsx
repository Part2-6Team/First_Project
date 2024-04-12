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
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 150%;
`;

export default CardListTitle;
