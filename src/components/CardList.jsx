import React from 'react';
import { styled } from 'styled-components';
import Card from './Card';

const arrowButton = {
  background: '../assets/Ellipse 1.svg',
  arrowLeft: '../assets/arrow_left.svg',
  arrowRight: '../assets/arrow_right.svg',
};

function CardList(background, arrowWayLeft, arrowWayRight) {
  return (
    <CardListStyled>
      <ArrowButton backgroundImage={arrowButton[background]}>
        <ArrowButtonWay arrowWay={arrowButton[arrowWayLeft]} />
      </ArrowButton>
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
        colorData="purple"
        profileImageData=""
        toUser="To."
        userName="Sowon"
        rollingWriteCount="30"
        rollingWriteText="명이 작성했어요!"
        emoji="👍"
        count="20"
      />
      <Card
        colorData="blue"
        profileImageData=""
        toUser="To."
        userName="Sowon"
        rollingWriteCount="30"
        rollingWriteText="명이 작성했어요!"
        emoji="👍"
        count="20"
      />
      <Card
        colorData="green"
        profileImageData=""
        toUser="To."
        userName="Sowon"
        rollingWriteCount="30"
        rollingWriteText="명이 작성했어요!"
        emoji="👍"
        count="20"
      />
      <ArrowButton backgroundImage={arrowButton[background]}>
        <ArrowButtonWay arrowWay={arrowButton[arrowWayRight]} />
      </ArrowButton>
    </CardListStyled>
  );
}

const CardListStyled = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
`;

const ArrowButton = styled.div`
  background-image: ${(props) => props.backgroundImage};
`;

const ArrowButtonWay = styled.div`
  background-image: ${(props) => props.arrowWay};
`;

export default CardList;
