import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import CardListTitle from './CardListTitle';
import CardList from './CardList';
import getRecipients from '../api/getRecipients';

function ListPageComponent() {
  const [recipientsPopular, setRecipientsPopular] = useState([]);
  const [recipientsNewest, setRecipientsNewest] = useState([]);
  const [nextPopularUrl, setNextPopularUrl] = useState('');
  const [prevPopularUrl, setPrevPopularUrl] = useState('');
  const [nextNewestUrl, setNextNewestUrl] = useState('');
  const [prevNewestUrl, setPrevNewestUrl] = useState('');

  const handlePopularMove = async (direction) => {
    const url = direction === 'left' ? prevPopularUrl : nextPopularUrl;
    const recipients = await getRecipients('like', url);
    setRecipientsPopular(recipients.results);
    setNextPopularUrl(recipients.next);
    setPrevPopularUrl(recipients.previous);
  };

  const handleNewestMove = async (direction) => {
    const url = direction === 'left' ? prevNewestUrl : nextNewestUrl;
    const recipients = await getRecipients('', url);
    setRecipientsNewest(recipients.results);
    setNextNewestUrl(recipients.next);
    setPrevNewestUrl(recipients.previous);
  };

  useEffect(() => {
    async function getData() {
      const recipients1 = await getRecipients('like');
      setRecipientsPopular(recipients1.results);
      setNextPopularUrl(recipients1.next);
      setPrevPopularUrl(recipients1.previous);
      const recipients2 = await getRecipients();
      setRecipientsNewest(recipients2.results);
      setNextNewestUrl(recipients2.next);
      setPrevNewestUrl(recipients2.previous);
    }
    getData();
  }, []);

  return (
    <ListPageStyled>
      <CardListTitle textType="Text1" />
      <CardList
        recipientsData={recipientsPopular}
        rightClick={() => {
          handlePopularMove('right');
        }}
        leftClick={() => {
          handlePopularMove('left');
        }}
        rightButtonVisible={nextPopularUrl}
        leftButtonVisible={prevPopularUrl}
      />
      <CardListTitle textType="Text2" />
      <CardList
        recipientsData={recipientsNewest}
        rightClick={() => {
          handleNewestMove('right');
        }}
        leftClick={() => {
          handleNewestMove('left');
        }}
        rightButtonVisible={nextNewestUrl}
        leftButtonVisible={prevNewestUrl}
      />
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
