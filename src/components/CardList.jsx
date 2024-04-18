import React, { useState } from 'react';
import { styled } from 'styled-components';
import Card from './Card';

const arrowButton = {
  background: '../assets/Ellipse 1.svg',
  arrowLeft: '../assets/arrow_left.svg',
  arrowRight: '../assets/arrow_right.svg',
};

function CardList() {
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

  return (
    <CardListContainer id="cardListContainer">
      <ArrowButtonLeft
        onClick={() => handleScroll('left')}
        backgroundImage={arrowButton.background}
        alt="왼쪽화살표"
      />
      <CardListStyled>
        <Card
          colorData="beige"
          profileImageData=""
          toUser="To."
          userName="Sowon"
          rollingWriteCount="30"
          rollingWriteText="명이 작성했어요!"
          emoji="👍"
          count="20"
        />
        <Card
          colorData="beige"
          profileImageData=""
          toUser="To."
          userName="Sowon"
          rollingWriteCount="30"
          rollingWriteText="명이 작성했어요!"
          emoji="👍"
          count="20"
        />
        <Card
          colorData="beige"
          profileImageData=""
          toUser="To."
          userName="Sowon"
          rollingWriteCount="30"
          rollingWriteText="명이 작성했어요!"
          emoji="👍"
          count="20"
        />
        <Card
          colorData="beige"
          profileImageData=""
          toUser="To."
          userName="Sowon"
          rollingWriteCount="30"
          rollingWriteText="명이 작성했어요!"
          emoji="👍"
          count="20"
        />
        <Card
          colorData="beige"
          profileImageData=""
          toUser="To."
          userName="Sowon"
          rollingWriteCount="30"
          rollingWriteText="명이 작성했어요!"
          emoji="👍"
          count="20"
        />
      </CardListStyled>
      <ArrowButtonRight
        onClick={() => handleScroll('right')}
        backgroundImage={arrowButton.arrowRight}
        alt="오른쪽화살표"
      />
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
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-size: contain;
`;

const ArrowButtonLeft = styled(ArrowButton)`
  left: 0;
`;

const ArrowButtonRight = styled(ArrowButton)`
  right: 0;
`;

export default CardList;
