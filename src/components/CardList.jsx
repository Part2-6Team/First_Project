import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Card from './Card';
import Background from '../assets/Ellipse1.svg';
import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';
import getRecipients from '../api/getRecipients';

const arrowButton = {
  background: Background,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

const recipientsData = [];

function CardList() {
  const [isLoading, setIsLoading] = useState(true);

  const handleScroll = (direction) => {
    const container = document.getElementById('cardListContainer');
    if (container) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    async function getData() {
      const recipients = await getRecipients();
      recipientsData.length = 0;
      recipientsData.push(...recipients.results);
    }
    getData().then(() => {
      console.log(recipientsData);
      setIsLoading(false);
    });
  }, []);

  return (
    <CardListContainer id="cardListContainer">
      <ArrowButtonLeft
        onClick={handleScroll('left')}
        backgroundimage={`url(${arrowButton.background})`}
      >
        <img src={ArrowLeft} alt="왼쪽화살표" />
      </ArrowButtonLeft>
      <CardListStyled>
        {recipientsData.map((recipient) => {
          return (
            !isLoading && (
              <Card
                key={recipient.id}
                className="cardComponent"
                id={recipient.id}
                userName={recipient.name}
                rollingWriteCount={recipient.messageCount}
                backgroundColor={recipient.backgroundColor}
                backgroundImage={recipient.backgroundImageURL}
                profileImages={recipient.recentMessages}
                emojiCount={recipient.reactionCount}
                emojis={recipient.topReactions}
              />
            )
          );
        })}
      </CardListStyled>
      <ArrowButtonRight
        onClick={handleScroll('right')}
        backgroundimage={`url(${arrowButton.background})`}
      >
        <img src={ArrowRight} alt="오른쪽화살표" />
      </ArrowButtonRight>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const CardListStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-image: ${(props) => `url("${props.backgroundimage}")`};
  background-size: contain;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 0;
  background-image: ${(props) => props.backgroundimage};
  background-size: cover;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 0;
  background-image: ${(props) => props.backgroundimage};
  background-size: cover;
`;

export default CardList;
