import React, { useState } from 'react';
import { styled } from 'styled-components';
import EmojiPicker from 'emoji-picker-react';

import { useParams } from 'react-router-dom';
import plusProfile from '../../assets/plusProfile.svg';
import dropArrow from '../../assets/dropArrow.svg';
import addEmoji from '../../assets/addEmoji.svg';
import share from '../../assets/share.svg';

import EmojiBadge from './EmojiBadge';
import ProfileImg from './profileImg';
import device from '../../config';
import useReactions from '../../hooks/useReactions';

function Header({ recipients, handleOpenUrlShared, isUrlSharedPharases }) {
  const { id } = useParams();
  const reactions = useReactions({ id, limit: 8, offset: 0 });
  const mostReactions = reactions?.results.slice(0, 3);
  const otherReactions = reactions?.results.slice(3, 11);

  console.log(recipients);
  const messages = recipients?.recentMessages;
  const recentMessages = messages?.slice(0, 3);

  // const reactions = recipients?.topReactions;

  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isClickSharedBtn, setIsClickSharedBtn] = useState(false);
  const [isClickEmojiMore, setIsClickEmojiMore] = useState(false);

  const handleEmojiPicker = () => {
    setIsEmojiPickerOpen((prev) => !prev);
  };

  const handleEmojiMore = () => {
    setIsClickEmojiMore((prev) => !prev);
  };

  const handleClickSharedBtn = () => {
    setIsClickSharedBtn((prev) => !prev);
  };

  const sharedContainer = (
    <SharedContainer>
      <button type="button" className="shared_kakao">
        카카오톡 공유
      </button>
      <button
        type="button"
        disabled={isUrlSharedPharases}
        onClick={handleOpenUrlShared}
        className="shared_url"
      >
        URL 공유
      </button>
    </SharedContainer>
  );

  const emojiContainer = otherReactions ? (
    <EmojiContainer>
      {otherReactions.map((reaction) => (
        <EmojiBadge
          key={reaction.id}
          emoji={reaction.emoji}
          count={reaction.count}
        />
      ))}
    </EmojiContainer>
  ) : (
    <EmojiContainer>리액션을 추가해 주세요.</EmojiContainer>
  );

  return (
    <Container>
      <Left>{recipients?.name}</Left>
      <Right>
        <PostUserContainer>
          <ProfileContainer>
            {recentMessages?.map((message) => (
              <ProfileImg
                key={message.id}
                src={message.profileImageURL}
                alt="profileImg"
                border
                translate
              />
            ))}
            {recipients?.messageCount > 3 ? (
              <ProfileImg
                src={plusProfile}
                alt="profileImg"
                translate
                plusProfile={Number(recipients?.messageCount) - 3}
              />
            ) : null}
          </ProfileContainer>
          <PostCountText>
            {recipients?.messageCount}
            명이 작성했어요!
          </PostCountText>
        </PostUserContainer>
        <MostEmojiContainer>
          {mostReactions?.map((reaction) => (
            <EmojiBadge
              key={reaction.id}
              emoji={reaction.emoji}
              count={reaction.count}
            />
          ))}
          {isClickEmojiMore && emojiContainer}
        </MostEmojiContainer>
        <DropArrow src={dropArrow} alt="dropArrow" onClick={handleEmojiMore} />

        <AddEmojiBtn onClick={handleEmojiPicker}>
          <img className="addEmoji" src={addEmoji} alt="add emoji button" />
          <p className="addText">추가</p>
          <EmojiPickerWrap>
            <EmojiPicker open={isEmojiPickerOpen} />
          </EmojiPickerWrap>
        </AddEmojiBtn>

        <DividingLine />

        <ShareButton onClick={handleClickSharedBtn}>
          <img className="shareImg" src={share} alt="share button" />
          {isClickSharedBtn && sharedContainer}
        </ShareButton>
      </Right>
    </Container>
  );
}

const Container = styled.header`
  max-width: 1184px;

  display: flex;
  padding: 13px 24px;

  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    max-width: 100%;
    margin: 0 auto;
  }

  @media ${device.mobile} {
    // max-width: 320px;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Left = styled.span`
  color: var(--Gray-800);
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.28px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    border-top: 1px solid var(--Gray-200);
    padding: 8px 0;
  }
`;

const PostUserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const PostCountText = styled.span`
  color: var(--Gray-900);
  font-size: 18px;
  font-weight: 400;
  line-height: 27px; /* 150% */
  margin-right: 28px;
`;

const MostEmojiContainer = styled.div`
  position: relative;

  display: flex;
  gap: 10px;

  @media ${device.mobile} {
    gap: 8px;
  }
`;

const EmojiContainer = styled.div`
  position: absolute;
  top: 45px;
  right: -45px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 8px;

  border-radius: 32px;
  border: 1px solid #b6b6b6;
  background: var(--White);
  z-index: 1;
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
  cursor: pointer;

  @media ${device.mobile} {
    width: 24px;
    height: 24px;
  }
`;

const AddEmojiBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--Gray-300);
  background: var(--White);
  cursor: pointer;

  position: relative;

  .addEmoji {
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    padding: 8px;

    .addText {
      display: none;
    }

    .addEmoji {
      width: 20px;
      height: 20px;
    }
  }
`;

const EmojiPickerWrap = styled.div`
  position: absolute;
  top: 48px;
  right: 20px;
  z-index: 1;
`;

const DividingLine = styled.div`
  width: 1px;
  height: 28px;
  background: var(--Gray-200);
  margin: 0 13px;
`;

const ShareButton = styled.button`
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid var(--Gray-300);
  background: var(--White);
  cursor: pointer;

  position: relative;

  .shareImg {
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    padding: 8px;

    .shareImg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SharedContainer = styled.div`
  border-radius: 8px;
  border: 1px solid var(--Gray-300);
  background: var(--White);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;

  position: absolute;
  top: 50px;
  right: -10px;

  .shared_kakao {
    width: 138px;
    padding: 12px 16px;
    border: none;
    cursor: pointer;

    color: var(--Gray-900);
    background: var(--White);

    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      background: var(--Gray-100);
    }
  }

  .shared_url {
    width: 138px;
    padding: 12px 16px;
    border: none;
    cursor: pointer;

    color: var(--Gray-900);
    background: var(--White);

    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      background: var(--Gray-100);
    }
  }
`;

export default Header;
