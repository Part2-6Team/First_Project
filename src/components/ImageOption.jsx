/*이미지 부분 수정*/

import React from 'react';
import Check from '../assets/check.png';
import styled from 'styled-components';

function ImageOption({ image, selectImage, onSelected, onSelcetedImage }) {
    const handleSelectImage = (value) => {
        selectImage(value);
        onSelcetedImage(value);
    };
  
    return (
      <SelectContainer onClick={() => handleSelectImage(img)}>
        { /* onSelected && (
                <CheckImage img src = { Check } alt="checkIcon" />
            )*/ }
      </SelectContainer>
    );
}

const SelectContainer = styled.div`
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
`;

/* 
const CheckImage = styled.div`
    position: absolute;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
        width: 44px;
        height: 44px;
    }
`;
*/

export default ImageOption;