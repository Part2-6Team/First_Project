import React from 'react';
import { styled } from 'styled-components';

import profile from '../../assets/profile.png';

function Card() {
  return (
    <Container>
      <ProfileWrap>
        <ProfileImg src={profile} alt="profileImg" />
        <div>
          <Name>
            <span className="from">From.</span>
            <span className="name">김동훈</span>
          </Name>
          <RelrationLabel>가족</RelrationLabel>
        </div>
      </ProfileWrap>
      <Comment>
        <p className="comment">
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요!
        </p>
      </Comment>
      <CreatedAt>2021.09.01</CreatedAt>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
  background-color: var(--White);
  width: 384px;
  height: 280px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
`;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 28px 0 15px;
  gap: 14px;

  border-bottom: 1px solid var(--Gray-200);
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  width: 56px;
  height: 56px;
`;

const Name = styled.span`
  display: flex;
  gap: 6px;

  .from {
    color: var(--Black);
    font-size: 20px;
    font-weight: 400;
  }

  .name {
    color: var(--Black);
    font-size: 20px;
    font-weight: 700;
  }
`;

const RelrationLabel = styled.span`
  padding: 0 8px;
  text-align: center;
  border-radius: 4px;
  background-color: var(--Green-100);

  color: var(--Green-500);
  font-size: 14px;
  font-weight: 400;
`;

const Comment = styled.div`
  width: 100%;

  overflow: hidden;
  color: var(--gray-600);
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.2;
  height: 5.5em;

  display: -webkit-box;
  -webkit-line-clamp: 4; // 원하는 라인수
  -webkit-box-orient: vertical;

  .comment {
    font-size: 18px;
    font-weight: 400;
  }
`;

const CreatedAt = styled.span`
  position: absolute;
  left: 24px;
  bottom: 24px;
`;

export default Card;
