/* eslint-disable react/no-danger */
import React from 'react';
import { styled } from 'styled-components';
import DOMPurify from 'dompurify';

import device from '../../config';

import trashIcon from '../../assets/trashIcon.svg';
import deleteRequest from '../../api/deleteRequest';

const relationshipLabel = {
  지인: {
    background: 'var(--Orange-100, #FFF0D6)',
    color: 'var(--Orange-500, #FF8832)',
  },
  가족: {
    background: 'var(--Green-100, #E4FBDC)',
    color: 'var(--Green-500, #2BA600)',
  },
  친구: {
    background: 'var(--Blue-100, #E2F5FF)',
    color: 'var(--Blue-500, #00A2FE)',
  },
  동료: {
    background: 'var(--Purple-100, #F8F0FF)',
    color: 'var(--Purple-600, #9935FF)',
  },
};

function Card({
  id,
  name,
  relationship,
  profileImg,
  comment,
  createdAt,
  edit,
  onClickCard,
}) {
  const safetyComment = DOMPurify.sanitize(comment);

  const handleDeleteCard = async (event, cardId) => {
    event.stopPropagation();
    await deleteRequest(`messages/${cardId}/`);
    window.location.reload();
  };

  return (
    <Container onClick={() => onClickCard(id)}>
      <Wrap>
        <ProfileWrap>
          <ProfileImg src={profileImg} alt="profileImg" />
          <div>
            <Name>
              <span className="from">From.</span>
              <span className="name">{name}</span>
            </Name>
            <RelrationLabel $relation={relationship}>
              {relationship}
            </RelrationLabel>
          </div>
        </ProfileWrap>
        {edit && (
          <DeleteBtn onClick={(e) => handleDeleteCard(e, id)}>
            <img className="deleteIcon" src={trashIcon} alt="trash Icon" />
          </DeleteBtn>
        )}
      </Wrap>
      <Comment>
        <p
          className="comment"
          dangerouslySetInnerHTML={{ __html: safetyComment }}
        />
      </Comment>
      <CreatedAt>{createdAt}</CreatedAt>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
  background-color: var(--White);
  min-width: 100%;

  height: 280px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  cursor: pointer;

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

    overflow: hidden;
    color: var(--gray-600);
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 1; // 원하는 라인수
    -webkit-box-orient: vertical;
  }
`;

const RelrationLabel = styled.span`
  padding: 0 8px;
  text-align: center;
  border-radius: 4px;
  background: ${({ $relation }) => relationshipLabel[$relation].background};

  color: ${({ $relation }) => relationshipLabel[$relation].color};
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
