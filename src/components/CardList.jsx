import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';

function CardList() {
  return (
    <CardListStyled>
      <Card ColorData="beige" />
    </CardListStyled>
  );
}

const CardListStyled = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
`;

export default CardList;
