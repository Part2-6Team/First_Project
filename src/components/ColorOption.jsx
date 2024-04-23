import React from 'react';
import Check from '../assets/check.png';
import { SelectContainer, SelectedLayer } from './OptionStyle';

function colorOption({ color, onSelectColor, isSelected, onSelectedColor }) {
  const onClickColorHandle = (value) => {
    onSelectColor(value);
    onSelectedColor(value);
  };

  return (
    <SelectContainer color={color} onClick={() => onClickColorHandle(color)}>
      {isSelected && (
        <SelectedLayer>
          <img src={Check} alt="selectIcon" />
        </SelectedLayer>
      )}
    </SelectContainer>
  );
}

export default colorOption;
