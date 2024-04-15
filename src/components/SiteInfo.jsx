import React from 'react';
import { styled } from 'styled-components';
import device from '../config';

function NewLine({ sentences }) {
  return sentences.split('\n').map((sentence, index) => {
    return (
      <React.Fragment key={index}>
        <span>{sentence} </span>
        <br />
      </React.Fragment>
    );
  });
}

function SiteInfo({ dir = 'ltr', index, title, message, imgUrl }) {
  return (
    <Container dir={dir}>
      <div className="description">
        <div className="point">Point.{index}</div>
        <h2 className="title">
          <NewLine sentences={title} />
        </h2>
        <p className="message">{message}</p>
      </div>
      <img src={imgUrl} alt="사이트 소개 이미지" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-around;
  align-items: center;
  background: var(--Surface);
  border-radius: 16px;
  padding: 60px;
  gap: 50px;

  .description {
    display: flex;
    flex-direction: column;
    align-items: ${({ dir }) => (dir === 'rtl' ? 'flex-end' : 'flex-start')};
    gap: 8px;
    text-align: left;
    font-family: Pretendard;

    .point {
      padding: 6px 12px;
      border-radius: 50px;
      background: var(--Purple-600);
      color: var(--White);
      font-weight: 700;
      font-size: 14px;
    }

    .title {
      white-space: nowrap;
      font-weight: 700;
    }

    .message {
      font-size: 18px;
      color: var(--Gray-500);
    }
  }

  @media ${device.pc_small} {
    width: calc(100vw - 48px);
    flex-direction: column;
    overflow: hidden;

    .description {
      width: 100%;

      .title {
        white-space: wrap;
      }

      .title br {
        display: none;
      }
    }
  }
`;

export default SiteInfo;
