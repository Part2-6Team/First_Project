/*이미지 부분 수정*/

import React, { useState, useEffect } from 'react';
import SelectedImg from '../assets/check.png';
import styled from 'styled-components';

function ImageOption({ img, selectImg, isSelected, selectedImg }) {
    const onClickImgHandle = (value) => {
      selectImg(value);
      selectedImg(value);
    };
  
    return (
      <BgItemWrapper onClick={() => onClickImgHandle(img)}>
        {isSelected && (
          <SelectedLayer>
            <img src={SelectedImg} alt="selectIcon" />
          </SelectedLayer>
        )}
      </BgItemWrapper>
    );
}

const BgItemWrapper = styled.div`
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    cursor: pointer;
`;

const SelectedLayer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        width: 44px;
        height: 44px;
    }
`;

export default ImageOption;