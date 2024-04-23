/* eslint-disable no-confusing-arrow */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundPatternBeige from '../assets/pattern_beige.svg';
import BackgroundPatternPurple from '../assets/pattern_purple.svg';
import BackgroundPatternBlue from '../assets/pattern_blue.svg';
import BackgroundPatterGreen from '../assets/pattern_green.svg';
import BackgroundImage1 from '../assets/card_background_image1.png';
import BackgroundImage2 from '../assets/card_background_image2.png';
import profileImages from '../assets/profile';
import device from '../config';

const randomIndexes = Array.from({ length: 3 }, () =>
  Math.floor(Math.random() * profileImages.length),
);

const BackgroundColorPattern = {
  beige: BackgroundPatternBeige,
  purple: BackgroundPatternPurple,
  blue: BackgroundPatternBlue,
  green: BackgroundPatterGreen,
};

const BackgroundColor = {
  beige: 'var(--Orange-200)',
  purple: 'var(--Purple-200)',
  blue: 'var(--Blue-200)',
  green: 'var(--Green-200)',
};

const BackgroundImages = {
  one: BackgroundImage1,
  two: BackgroundImage2,
};

function Card({
  backgroundColor,
  backgroundImage,
  toUser,
  userName,
  rollingWriteCount,
  rollingWriteText,
  emoji1,
  emoji2,
  emoji3,
  count1,
  count2,
  count3,
}) {
  const [pageLink, setPageLink] = useState('');

  const handleClick = () => {
    setPageLink('/post/:id');
  };

  if (pageLink) {
    window.location.href = pageLink;
  }

  const randomChoice = Math.random() < 0.8 ? 'pattern' : 'image';

  function getRandomImage() {
    const keys = Object.keys(BackgroundImages);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
  }

  function getRandomColorData() {
    const keys = Object.keys(BackgroundColorPattern);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return randomKey;
  }

  if (randomChoice === 'pattern') {
    const randomColorData = getRandomColorData();
    backgroundColor = BackgroundColor[randomColorData];
    backgroundImage = BackgroundColorPattern[randomColorData];
  } else {
    const randomImage = getRandomImage();
    backgroundImage = BackgroundImages[randomImage];
  }

  return (
    <CardStyled
      onClick={handleClick}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
    >
      <CardContainer>
        <CardDataSection>
          <CardToId>
            {toUser} {userName}
          </CardToId>
          <ProfileImageContainer>
            <ProfileImageFirst
              src={profileImages[randomIndexes[0]].img}
              alt={profileImages[randomIndexes[0]].name}
            />
            <ProfileImage
              src={profileImages[randomIndexes[1]].img}
              alt={profileImages[randomIndexes[1]].name}
            />
            <ProfileImage
              src={profileImages[randomIndexes[2]].img}
              alt={profileImages[randomIndexes[2]].name}
            />
            <ProfilePlus>+27</ProfilePlus>
          </ProfileImageContainer>
          <div>
            <RollingWriteCount>{rollingWriteCount}</RollingWriteCount>
            <RollingWriteText>{rollingWriteText}</RollingWriteText>
          </div>
        </CardDataSection>
        <EmojiBadgeSection>
          <EmojiLine />
          <EmojiBadgeFrame>
            <EmojiBadge>
              {emoji1} {count1}
            </EmojiBadge>
            <EmojiBadge>
              {emoji2} {count2}
            </EmojiBadge>
            <EmojiBadge>
              {emoji3} {count3}
            </EmojiBadge>
          </EmojiBadgeFrame>
        </EmojiBadgeSection>
      </CardContainer>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 275px;
  height: 260px;
  padding: 30px 24px 20px 24px;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-repeat: no-repeat;
  background-position: right bottom;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  margin-top: 16px;
  cursor: pointer;

  ${(props) =>
    props.backgroundImage === BackgroundColorPattern
      ? `
      url("${props.backgroundImage}")
    `
      : `
      linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url("${props.backgroundImage}")
      color: var(--White)
    `}
`;

const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 43px;

  @media ${device.mobile} {
    width: 208px;
    height: 232px;
  }
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
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
`;

const ProfileImage = styled.img`
  display: flex;
  width: 28px;
  height: 28px;
  align-items: center;
  margin-left: -12px;
  border-radius: 50px;
  border: 1.5px solid var(--White);
  background: var(--White);
`;

const ProfileImageFirst = styled(ProfileImage)`
  margin-left: 0px;
`;

const ProfilePlus = styled.div`
  display: flex;
  padding: 5px 6px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: -12px;
  border-radius: 30px;
  background: var(--White);
  color: var(--Gray-500);
  font-size: 12px;
  font-weight: 400;
  line-height: 150%
  letter-spacing: -0.06px;
  `;

const RollingWriteCount = styled.span`
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 26px;
`;

const RollingWriteText = styled.span`
  color: var(--Gray-700);
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

const EmojiBadgeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const EmojiLine = styled.div`
  width: 227px;
  height: 1px;
  background: rgba(0, 0, 0, 0.12);
`;

const EmojiBadgeFrame = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  @media ${device.mobile} {
    gap: 4px;
  }
`;

const EmojiBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--White);
  font-size: 16px;
  font-weight: 400;
  line-height: 125%;
  padding: 8px 12px;
  border-radius: 32px;
  background-color: rgba(0, 0, 0, 0.54);
`;

export default Card;
