import React from 'react';
import { styled } from 'styled-components';
import siteImage1 from '../assets/siteInfo1.png';
import siteImage2 from '../assets/siteInfo2.png';
import device from '../config';

const TITLE = [
  '',
  '누구나 손쉽게, 온라인\n롤링 페이퍼를 만들 수 있어요',
  '서로에게 이모지로 감정을\n표현해보세요',
];

const MESSAGE = [
  '',
  '로그인 없이 자유롭게 만들어요',
  '롤링 페이퍼에 이모지를 추가할 수 있어요',
];

function NewLine({ sentence }) {
  sentence = sentence.split('\n');
  return (
    <>
      <span>{sentence[0]}</span>
      <br />
      <span>{sentence[1]}</span>
    </>
  );
}

function SiteInfo({ order }) {
  const point = `Point. 0${order}`;
  return (
    <Container order={order}>
      <div className="description">
        <div className="point">{point}</div>
        {/* <h2 className="title">{TITLE[order]}</h2> */}
        <h2 className="title">
          <NewLine sentence={TITLE[order]} />
        </h2>
        <p className="message">{MESSAGE[order]}</p>
      </div>
      {order === 1 ? <img src={siteImage1} alt="롤링 페이퍼 만들기" /> : null}
      {order === 2 ? <img src={siteImage2} alt="이모지 추가" /> : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ order }) => (order === 1 ? 'row' : 'row-reverse')};
  justify-content: flex-end;
  align-items: center;
  padding: 60px 50px;
  gap: 50px;
  border-radius: 16px;
  background: var(--Surface);
  overflow: hidden;

  .description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    font-family: Pretendard;

    .point {
      padding: 6px 12px;
      border-radius: 50px;
      background: var(--Purple-600);
      color: var(--White);
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
    }

    .title {
      margin: 0;
      font-weight: 700;
      line-height: 36px;
    }

    .message {
      margin: 0;
      font-size: 18px;
      line-height: 28px;
      color: var(--Gray-500);
    }
  }

  @media ${device.pc_small} {
    flex-direction: column;
    justify-content: center;
    width: 90vw;

    .description {
      width: 100%;

      .title br {
        display: none;
      }
    }
  }

  @media ${device.mobile} {
    .title br {
      display: block;
    }
  }
`;

export default SiteInfo;
