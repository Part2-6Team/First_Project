import React from 'react';
import { styled } from 'styled-components';

import profile from '../../assets/profile.png';
import device from '../../config';

import trashIcon from '../../assets/trashIcon.svg';

function Card({ edit }) {
  return (
    <Container>
      <Wrap>
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
        {edit && (
          <DeleteBtn>
            <img className="deleteIcon" src={trashIcon} alt="trash Icon" />
          </DeleteBtn>
        )}
      </Wrap>
      <Comment>
        <p className="comment">
          코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또
          하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심
          또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두
          조심 또 하세요!
        </p>
      </Comment>
      <CreatedAt>2021.09.01</CreatedAt>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
  background-color: var(--White);
  max-width: 384px;
  height: 280px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  @media ${device.tablet} {
    max-width: 352px;
    height: 284px;
  }

  @media ${device.mobile} {
    max-width: 320px;
    height: 230px;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  border-bottom: 1px solid var(--Gray-200);
`;

const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 28px 0 15px;
  gap: 14px;

  @media ${device.mobile} {
    padding: 16px 0 15px;
  }
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

const DeleteBtn = styled.button`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;

  border-radius: 6px;
  border: 1px solid var(--Gray-300);

  .deleteIcon {
    width: 24px;
    height: 24px;
  }
`;

const Comment = styled.div`
  width: 100%;
  padding-top: 16px;

  overflow: hidden;
  color: var(--gray-600);
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.2;
  height: 6.2em;

  display: -webkit-box;
  -webkit-line-clamp: 4; // 원하는 라인수
  -webkit-box-orient: vertical;

  @media ${device.tablet} {
    -webkit-line-clamp: 3; // 원하는 라인수
    height: 5em;
  }

  @media ${device.mobile} {
    -webkit-line-clamp: 2; // 원하는 라인수
    height: 3.4em;
  }

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
