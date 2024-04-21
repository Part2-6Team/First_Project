import React from 'react';
import Check from '../assets/check.png';
import { SelectContainer, CheckImage } from './OptionStyle';

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

export default colorOption;
