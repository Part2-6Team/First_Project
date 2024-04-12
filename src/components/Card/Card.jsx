/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';
import { BackgroundColorPattern, BackgroundColor } from './constant';

export const Card = ({ ColorData, ProfileImageData }) => (
  <CardStyled backgroundColor={BackgroundColor[ColorData]}>
    <CardContainer>
      <img src={BackgroundColorPattern[ColorData]} alt="배경 색 패턴" />
      <CardDataSection>
        <CardToId>To.</CardToId>
        <ProfileImage>{ProfileImageData}</ProfileImage>
        <RollingWriteCount>30</RollingWriteCount>
        <RollingWriteText>명이 작성했어요!</RollingWriteText>
      </CardDataSection>
      <EmojiBadge>
        <EmojiBadgeContent>Emoji, count</EmojiBadgeContent>
      </EmojiBadge>
    </CardContainer>
  </CardStyled>
);

const CardStyled = styled.div`
  width: 27.5rem;
  height: 26rem;
  padding: 3rem 2.4rem 2rem 2.4rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
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

const EmojiBadge = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 10px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.54);
`;

const EmojiBadgeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--White);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 125%;
`;
