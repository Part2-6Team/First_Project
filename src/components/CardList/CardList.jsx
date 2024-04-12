/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';
import { Card } from '../Card';

export const CardList = (data) => {
  const ColorData = data;

  return (
    <CardListStyled>
      <Card ColorData={ColorData} />
    </CardListStyled>
  );
};

const CardListStyled = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
`;
