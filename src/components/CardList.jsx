import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';
import Background from '../assets/Ellipse1.svg';
import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';

const arrowButton = {
  background: Background,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
};

function CardList({
  recipientsData,
  rightClick,
  leftClick,
  rightButtonVisible,
  leftButtonVisible,
}) {
  // const handleScroll = (direction) => {
  //   const container = document.getElementById('cardListContainer');
  //   if (container) {
  //     const scrollAmount = direction === 'left' ? -100 : 100;
  //     container.scrollBy({
  //       left: scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  return (
    <CardListContainer id="cardListContainer">
      {leftButtonVisible ? (
        <ArrowButtonLeft
          onClick={leftClick}
          backgroundimage={`url(${arrowButton.background})`}
        >
          <img src={ArrowLeft} alt="왼쪽화살표" />
        </ArrowButtonLeft>
      ) : null}
      <CardListStyled>
        {recipientsData.map((recipient) => (
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
        ))}
      </CardListStyled>
      {rightButtonVisible ? (
        <ArrowButtonRight
          onClick={rightClick}
          backgroundimage={`url(${arrowButton.background})`}
        >
          <img src={ArrowRight} alt="오른쪽화살표" />
        </ArrowButtonRight>
      ) : null}
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
