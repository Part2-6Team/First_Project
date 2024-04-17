import React from 'react';
import { styled } from 'styled-components';
import CardListTitle from './CardListTitle';
import CardList from './CardList';

function ListPage() {
  return (
    <ListPageStyled>
      <CardListTitle textType="Text1" />
      <CardList
        background="background"
        arrowWayLeft="arrowLeft"
        arrowWayRight="arrowRight"
      />
      <CardListTitle textType="Text2" />
      <CardList />
    </ListPageStyled>
  );
}

const ListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
  }
`;

export default ListPage;
