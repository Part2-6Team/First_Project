import React from 'react';
import { styled } from 'styled-components';

const BackgroundColorPattern = {
  beige: '../assets/pattern_beige.svg',
  purple: '../assets/pattern_purple.svg',
  blue: '../assets/pattern_blue.svg',
  green: '../assets/pattern_green.svg',
};

const BackgroundColor = {
  beige: 'beige',
  purple: 'purple',
  blue: 'blue',
  green: 'green',
};

function Card({ ColorData, ProfileImageData }) {
  return (
    <CardStyled backgroundColor={BackgroundColor[ColorData]}>
      <CardContainer>
        <img src={BackgroundColorPattern[ColorData]} alt="배경 색 패턴" />
        <CardDataSection>
          <CardToId>To.</CardToId>
          <ProfileImage>{ProfileImageData}</ProfileImage>
          <RollingWriteCount>30</RollingWriteCount>
          <RollingWriteText>명이 작성했어요!</RollingWriteText>
        </CardDataSection>
        <EmojiBadgeSection>
          <EmojiBadgeFrame>
            <EmojiBadge>E, c</EmojiBadge>
            <EmojiBadge>E, c</EmojiBadge>
            <EmojiBadge>E, c</EmojiBadge>
          </EmojiBadgeFrame>
        </EmojiBadgeSection>
      </CardContainer>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem 2rem 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  margin-top: 1.6rem;
`;

const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;
`;

const CardDataSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const CardToId = styled.div`
  color: var(--Gray-900);
  text-overflow: ellipsis;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

const ProfileImage = styled.div``;

const RollingWriteCount = styled.div`
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
`;

const RollingWriteText = styled.div`
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

const EmojiBadgeSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const EmojiBadgeFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const EmojiBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 125%;
  padding: 8px 12px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.54);
`;

export default Card;
