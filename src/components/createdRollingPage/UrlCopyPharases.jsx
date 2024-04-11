import React from 'react';
import { styled } from 'styled-components';

import checkImg from '../../assets/checkImg.svg';
import closeIcon from '../../assets/closeIcon.svg';

function UrlCopyPhrases() {
  return (
    <Container>
      <CopyUrl>
        <CheckImg className="checkImg" src={checkImg} alt="checkImg" />
        <StyledText className="Text">URL이 복사 되었습니다</StyledText>
      </CopyUrl>
      <CloseBtn type="button" className="closeBtn">
        <img src={closeIcon} alt="closeIcon" />
      </CloseBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 30px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  width: 524px;

  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 870px) {
    width: 320px;
  }
`;

const CopyUrl = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const CheckImg = styled.img`
  width: 24px;
  height: 24px;
`;

const StyledText = styled.p`
  color: var(--White);
  font-size: 16px;
  font-weight: 400;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export default UrlCopyPhrases;
