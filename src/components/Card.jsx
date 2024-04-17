/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { styled } from 'styled-components';

const BackgroundColorPattern = {
  beige: '../assets/pattern_beige.svg',
  purple: '../assets/pattern_purple.svg',
  blue: '../assets/pattern_blue.svg',
  green: '../assets/pattern_green.svg',
};

const BackgroundColor = {
  beige: 'var(--Orange-200)',
  purple: 'var(--Purple-200)',
  blue: 'var(--Blue-200)',
  green: 'var(--Green-200)',
};

function Card({
  colorData,
  profileImageData,
  toUser,
  userName,
  rollingWriteCount,
  rollingWriteText,
  emoji,
  count,
}) {
  return (
    <CardStyled
      backgroundColor={BackgroundColor[colorData]}
      backgroundImage={BackgroundColorPattern[colorData]}
    >
      <CardContainer>
        <CardDataSection>
          <CardToId>
            {toUser} {userName}
          </CardToId>
          <ProfileImage>{profileImageData}</ProfileImage>
          <div>
            <RollingWriteCount>{rollingWriteCount}</RollingWriteCount>
            <RollingWriteText>{rollingWriteText}</RollingWriteText>
          </div>
        </CardDataSection>
        <EmojiBadgeSection>
          <EmojiLine />
          <EmojiBadgeFrame>
            <EmojiBadge>
              {emoji} {count}
            </EmojiBadge>
            <EmojiBadge>
              {emoji} {count}
            </EmojiBadge>
            <EmojiBadge>
              {emoji} {count}
            </EmojiBadge>
          </EmojiBadgeFrame>
        </EmojiBadgeSection>
        <img src={BackgroundColorPattern[colorData]} alt="배경 색 패턴" />
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
  background-image: ${(props) => `url(${props.backgroundImage})`};
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  margin-top: 1.6rem;

  @media (max-width: 768px) {
    width: 20.8rem;
    height: 23.2rem;
  }
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

const CardToId = styled.span`
  color: var(--Gray-900);
  text-overflow: ellipsis;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
`;

const ProfileImage = styled.div``;

const RollingWriteCount = styled.span`
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
`;

const RollingWriteText = styled.span`
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

const EmojiBadgeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const EmojiLine = styled.div`
  width: 22.7rem;
  height: 0.1rem;
  background: rgba(0, 0, 0, 0.12);
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
