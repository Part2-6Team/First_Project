import React from 'react';
import styled from 'styled-components';
import Check from '../assets/check.png';
import { Colors } from './BackgroundColors';

function colorOption({ color, selectColor, onSelected, onSelectedColor }) {
  const handleSelectColor = (value) => {
    selectColor(value);
    onSelectedColor(value);
  };

  return (
    <SelectContainer color={color} onClick={() => handleSelectColor(color)}>
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
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${({ color }) => Colors(color)};
  cursor: pointer;
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

export default colorOption;
