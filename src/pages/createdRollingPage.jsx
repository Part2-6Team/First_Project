import React from 'react';
import { styled } from 'styled-components';

import ProfileImg from '../components/createdRollingPage/profileImg';
import EmojiBadge from '../components/createdRollingPage/\bEmojiBadge';

import profile from '../assets/profile.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import plusProfile from '../assets/plusProfile.svg';
import dropArrow from '../assets/dropArrow.svg';
import addEmoji from '../assets/addEmoji.svg';
import share from '../assets/share.svg';

function CreatedRolloingPage() {
  return (
    <Header>
      <Left>To. Ashley Kim</Left>
      <Right>
        <PostUserContainer>
          <ProfileContainer>
            {/* TODO: 반복되는 부분 map으로 처리하기 */}
            <ProfileImg src={profile} alt="profileImg" border translate />
            <ProfileImg src={profile2} alt="profileImg" border translate />
            <ProfileImg src={profile3} alt="profileImg" border translate />
            <ProfileImg src={plusProfile} alt="profileImg" translate />
          </ProfileContainer>
          <PostCountText>9명이 작성했어요!</PostCountText>
        </PostUserContainer>
        <EmojiContainer>
          {/* TODO: 반복되는 부분 map으로 처리하기 */}
          <EmojiBadge />
          <EmojiBadge />
          <EmojiBadge />
        </EmojiContainer>
        <DropArrow src={dropArrow} alt="dropArrow" />
        <AddEmojiBtn>
          <img className="addEmoji" src={addEmoji} alt="add emoji button" />
          추가
        </AddEmojiBtn>
        <DividingLine />
        <ShareButton>
          <img className="shareImg" src={share} alt="share button" />
        </ShareButton>
      </Right>
    </Header>
  );
}

const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  padding: 13px 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1248px) {
    margin: 0 24px;
  }
`;

const Left = styled.span`
  color: var(--gray-800, #2b2b2b);
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const PostUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const PostCountText = styled.span`
  color: var(--gray-900, #181818);
  font-size: 18px;
  font-weight: 400;
  line-height: 27px; /* 150% */
  margin-right: 28px;
`;

const EmojiContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const DropArrow = styled.button`
  background-image: url(${dropArrow});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 36px;
  height: 36px;
  padding: 6px;
  margin: 0 8px;
`;

const AddEmojiBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  .addEmoji {
    width: 24px;
    height: 24px;
  }
`;

const DividingLine = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
  margin: 0 13px;
`;

const ShareButton = styled.button`
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);

  .shareImg {
    width: 24px;
    height: 24px;
  }
`;

export default CreatedRolloingPage;
