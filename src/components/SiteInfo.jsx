import React from 'react';
import { styled } from 'styled-components';

function NewLine({ sentences }) {
  return sentences.split('\n').map((sentence, index) => {
    return (
      <div key={index}>
        <span>{sentence}</span>
        <br />
      </div>
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

const Container = styled.div``;

export default SiteInfo;
