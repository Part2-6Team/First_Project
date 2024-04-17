import React from 'react';
import styled from 'styled-components';
import Check from '../assets/check.png';
import { Colors } from './Colors';

function colorOption({ color, selectColor, onSelected, onSelectedColor }) {
  const handleSelectColor = (value) => {
    selectColor(value);
    onSelectedColor(value);
  };

  return (
    <SelectContainer color={color} onClick={() => handleSelectColor(color)}>
      { /* onSelected && (
        <CheckImage img src = { Check } alt="checkIcon" />
      ) */ }
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ color }) => Colors(color)};
  cursor: pointer;
`;

/* 체크 표시 이미지 부분 추가해야 됨

const CheckImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 44px;
    height: 44px;
  }
`;
*/

export default colorOption;
