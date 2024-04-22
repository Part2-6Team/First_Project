/* 이미지 부분 수정 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Check from '../assets/check.png';

function ImageOption({ img, selectImage, onSelected, onSelcetedImage }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setLoading(false);

    return () => {
      image.onload = null;
    };
  }, [img]);
  
  const handleSelectImage = (value) => {
    selectImage(value);
    onSelcetedImage(value);
  };

  return (
    <SelectContainer onClick={() => handleSelectImage(image)}>
      <BgImgWrapper src={img} alt={img} />
      { onSelected && (
        <CheckImage img src={Check} alt="checkIcon" />
      )}
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  cursor: pointer;
`;

const BgImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const CheckImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 44px;
    height: 44px;
  }
`;

export default ImageOption;
