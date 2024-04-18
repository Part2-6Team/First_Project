import React from 'react';
import { styled } from 'styled-components';

import checkImg from '../../assets/checkImg.svg';
import device from '../../config';

function UrlCopyPhrases() {
  return (
    <Container>
      <CopyUrl>
        <CheckImg className="checkImg" src={checkImg} alt="checkImg" />
        <StyledText className="Text">URL이 복사 되었습니다</StyledText>
      </CopyUrl>
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

  z-index: 1;
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);

  opacity: 1;
  animation: fadeOut ease-in-out 5s;

  @keyframes fadeOut {
    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @media ${device.mobile} {
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

// const CloseBtn = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
// `;

export default UrlCopyPhrases;
