/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundPatternBeige from '../assets/pattern_beige.svg';
import BackgroundPatternPurple from '../assets/pattern_purple.svg';
import BackgroundPatternBlue from '../assets/pattern_blue.svg';
import BackgroundPatterGreen from '../assets/pattern_green.svg';
import defaultProfileImage from '../assets/profile/0.png';
import { Colors } from './BackgroundColors';
import device from '../config';

const BackgroundColorPattern = {
  beige: BackgroundPatternBeige,
  purple: BackgroundPatternPurple,
  blue: BackgroundPatternBlue,
  green: BackgroundPatterGreen,
};

function Card({
  id,
  backgroundColor,
  backgroundImage,
  userName,
  rollingWriteCount,
  profileImages,
  emojis,
}) {
  const [pageLink, setPageLink] = useState('');

  const handleClick = () => {
    setPageLink(`/post/${id}`);
  };

  if (pageLink) {
    window.location.href = pageLink;
  }

  const profileImage = [];
  profileImages.map((image) => profileImage.push(image.profileImageURL));

  const emoji = [
    { emoji: '😆', count: 0 },
    { emoji: '😇', count: 0 },
    { emoji: '😙', count: 0 },
  ];
  emojis.map((item, index) => {
    emoji[index] = { emoji: item.emoji, count: item.count };
    return null;
  });

  return (
    <CardStyled
      onClick={handleClick}
      backgroundcolor={backgroundColor}
      backgroundimage={backgroundImage}
    >
      <CardContainer>
        <CardDataSection>
          <CardToId>To. {userName}</CardToId>
          <ProfileImageContainer>
            <ProfileImageFirst
              src={profileImage[0] ?? defaultProfileImage}
              alt="프로필이미지1"
            />
            <ProfileImage
              src={profileImage[1] ?? defaultProfileImage}
              alt="프로필이미지2"
            />
            <ProfileImage
              src={profileImage[2] ?? defaultProfileImage}
              alt="프로필이미지3"
            />
            <ProfilePlus>+{rollingWriteCount}</ProfilePlus>
          </ProfileImageContainer>
          <div>
            <RollingWriteCount>{rollingWriteCount}</RollingWriteCount>
            <RollingWriteText>명이 작성했어요!</RollingWriteText>
          </div>
        </CardDataSection>
        <EmojiBadgeSection>
          <EmojiLine />
          <EmojiBadgeFrame>
            <EmojiBadge>
              {emoji[0].emoji}
              {emoji[0].count}
            </EmojiBadge>
            <EmojiBadge>
              {emoji[1].emoji}
              {emoji[1].count}
            </EmojiBadge>
            <EmojiBadge>
              {emoji[2].emoji}
              {emoji[2].count}
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
  background-color: ${(props) => Colors(props.backgroundcolor)};
  background-image: ${(props) => `url("${props.backgroundimage}")`};
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: cover;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  margin-top: 16px;
  cursor: pointer;

  ${(props) =>
    props.backgroundimage === BackgroundColorPattern
      ? `
      url("${props.backgroundimage}")
    `
      : `
      linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url("${props.backgroundimage}")
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
  font-family: Pretendard;
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
  font-family: Pretendard;
  color: var(--Gray-700);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 26px;
`;

const RollingWriteText = styled.span`
  font-family: Pretendard;
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
