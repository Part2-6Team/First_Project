import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleBtn = ({ onClick, type = 'button' }) => {
  const [selectColor, setSelectColor] = useState(true);

  const colorClick = (e) => {
    if (!selectColor) {
      setSelectColor(true);
      onClick(e);
    }
  };

  const imageClick = (e) => {
    if (selectColor) {
      setSelectColor(false);
      onClick(e);
    }
  };

  return (
    <ToggleBox>
      <ToggleOption onClick={colorClick} type={type} selected={selectColor}>컬러</ToggleOption>
      <ToggleOption onClick={imageClick} type={type} selected={!selectColor}>이미지</ToggleOption>
    </ToggleBox>
  );
};

const ToggleBox = styled.div`
  background-color: var(--Gray-100);
  border-radius: 0.6rem;
`;

const ToggleOption = styled.button`
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
  border: none;
`;

export default ToggleBtn;