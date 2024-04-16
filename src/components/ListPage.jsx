import React from 'react';
import { styled } from 'styled-components';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import Button from './Button';

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
      <ButtonSection>
        <Button PageName="listPage" />
      </ButtonSection>
    </ListPageStyled>
  );
}

const ListPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 38rem;
  margin-left: 21.8rem;
`;

const ButtonSection = styled.div`
  display: flex;
  width: 120rem;
  height: 10.4rem;
  padding: 2.4rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 4rem;
`;

export default ListPage;
