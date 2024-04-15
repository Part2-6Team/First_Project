import React from 'react';
import SelectedImg from '../assets/check.png';
import styled from 'styled-components';
import { getColor } from './Colors';

function colorOption({ color, selectColor, isSelected, selectedColor }) {
  const handleClickColor = (value) => {
    selectColor(value);
    selectedColor(value);
  };

  return (
    <BgImgWrapper color={color} onClick={() => handleClickColor(color)}>
      {isSelected && (
        <SelectedLayer>
          <img src={SelectedImg} alt="selectIcon" />
        </SelectedLayer>
      )}
    </BgImgWrapper>
  );
}

const BgImgWrapper = styled.div`
    position: relative;
    width: 168px;
    height: 168px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background-color: ${({ color }) => getColor(color)};
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

export default colorOption;