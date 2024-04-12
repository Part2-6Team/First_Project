/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';
import { CardListTitleText } from './constant';

export const CardListTitle = ({ textType }) => (
  <CardListTitleStyled>{CardListTitleText[textType]}</CardListTitleStyled>
);

const CardListTitleStyled = styled.div`
  color: var(--Black);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 150%;
`;
