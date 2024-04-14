import React, { useState } from 'react';
import styled from 'styled-components';

function ToggleBtn({ className, toggle }) {
  const initialState = {
    컬러: false,
    이미지: false,
  };
  
  const [isOn, setIsOn] = useState({ ...initialState, 컬러: true });

  const handleToggle = (value) => {
    setIsOn(() => ({
      ...initialState,
      [value]: true,
    }));
    toggle(value);
  };
  
  return (
    <ToggleBox className={className}>
      <ToggleOption
        $isOn={isOn['컬러']}
        onClick={() => handleToggle('컬러')}
      >
        컬러
      </ToggleOption>
      <ToggleOption
        $isOn={isOn['이미지']}
        onClick={() => handleToggle('이미지')}
      >
        이미지
      </ToggleOption>
    </ToggleBox>
  );
};

const ToggleBox = styled.div`
  width: 24.4rem;
  height: 4rem;
  display: flex;
  border-radius: 0.6rem;
`;

const ToggleOption = styled.button`
  width: 122px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;

  font-size: 16px;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  text-align: center;
  cursor: pointer;
`;

/* 눌렀을 때
color: ${({ $isOn }) => ($isOn ? --Purple-700 : --Gray-900)};
font-weight: ${({ $isOn }) => ($isOn ? `700` : `400`)};
background-color: ${({ $isOn }) => ($isOn ? --White : --Gray-100)};
border: 0.2rem solid ${({ $isOn }) => ($isOn ? --Purple-700 : --Gray-100)};
*/

export default ToggleBtn;