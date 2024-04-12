import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';

function CardList(ColorData) {
  return (
    <CardListStyled>
      <Card ColorData={ColorData} />
    </CardListStyled>
  );
}

const CardListStyled = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
`;

export default CardList;
