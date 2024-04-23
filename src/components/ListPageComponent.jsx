import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import getRecipients from '../api/getRecipients';

function ListPageComponent() {
  const [recipientsPopular, setRecipientsPopular] = useState([]);
  const [recipientsNewest, setRecipientsNewest] = useState([]);

  useEffect(() => {
    async function getData() {
      const recipients1 = await getRecipients('like');
      setRecipientsPopular(recipients1.results);
      const recipients2 = await getRecipients();
      setRecipientsNewest(recipients2.results);
    }
    getData();
  }, []);

  return (
    <ListPageStyled>
      <CardListTitle textType="Text1" />
      <CardList recipientsData={recipientsPopular} />
      <CardListTitle textType="Text2" />
      <CardList recipientsData={recipientsNewest} />
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

export default ListPageComponent;
