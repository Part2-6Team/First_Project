/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';
import { CardListTitle } from '../CardListTitle';
import { CardList } from '../CardList';
import { Button } from '../Button';

export const ListPage = () => {
  <ListPageStyled>
    <CardListTitle textType="Text1" />
    {CardList}
    <CardListTitle textType="Text2" />
    {CardList}
    {Button}
  </ListPageStyled>;
};

const ListPageStyled = styled.div``;
