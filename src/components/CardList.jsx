import React, { useState } from 'react';
import { styled } from 'styled-components';
import Card from './Card';

const arrowButton = {
  background: '../assets/Ellipse 1.svg',
  arrowLeft: '../assets/arrow_left.svg',
  arrowRight: '../assets/arrow_right.svg',
};

function CardList() {
  // eslint-disable-next-line no-unused-vars
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('cardListContainer');
    if (container) {
      const scrollAmount = direction === 'left' ? -100 : 100;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setScrollLeft(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <CardListContainer id="cardListContainer">
      <CardListStyled>
        <ArrowButtonLeft
          onClick={() => handleScroll('left')}
          src={`url(${arrowButton.background})`}
          alt="화살표 배경"
        >
          <ArrowButtonWay
            src={`url(${arrowButton.arrowLeft})`}
            alt="왼쪽화살표"
          />
        </ArrowButtonLeft>
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
        <ArrowButtonRight
          onClick={() => handleScroll('right')}
          src={`url(${arrowButton.background})`}
          alt="화살표 배경"
        >
          <ArrowButtonWay
            src={`url(${arrowButton.arrowRight})`}
            alt="오른쪽화살표"
          />
        </ArrowButtonRight>
      </CardListStyled>
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const CardListStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
  overflow-x: auto;
`;

const ArrowButtonLeft = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: ${(props) => props.backgroundImage};
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const ArrowButtonRight = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: ${(props) => props.backgroundImage};
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 50px;
  height: 50px;
`;

const ArrowButtonWay = styled.div`
  width: 100px;
  height: 100px;
`;

export default CardList;
