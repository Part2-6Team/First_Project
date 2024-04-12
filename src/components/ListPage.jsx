import React from 'react';
import { styled } from 'styled-components';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import Button from './Button';

function ListPage() {
  return (
    <ListPageStyled>
      <CardListTitle textType="Text1" />
      <CardList />
      <CardListTitle textType="Text2" />
      <CardList />
      <Button PageName="listPage" />
    </ListPageStyled>
  );
}

const ListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 38rem;
  margin-left: 21.8rem;
`;

export default ListPage;
