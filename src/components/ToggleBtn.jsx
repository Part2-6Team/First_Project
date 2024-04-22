import React, { useState } from 'react';
import styled from 'styled-components';

function ToggleBtn({ onToggle, toggleValue }) {
  const [selected, setSelected] = useState(toggleValue);

  const onClickHandle = (value) => {
    setSelected(value);
    onToggle(value);
  };

  return (
    <ToggleBox>
      <ToggleOption
        selected={selected === 'color'}
        onClick={() => onClickHandle('color')}
      >
        컬러
      </ToggleOption>
      <ToggleOption
        selected={selected === 'img'}
        onClick={() => onClickHandle('img')}
      >
        이미지
      </ToggleOption>
    </ToggleBox>
  );
}

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
  font-weight: ${({ selected }) => (selected ? '700' : '400')};
  color: ${({ selected }) => (selected ? 'var(--Purple-700)' : 'var(--Gray-900)')};
  background-color: ${({ selected }) => (selected ? 'var(--White)' : 'var(--Gray-100)')};
  border: 2px solid ${({ selected }) => (selected ? 'var(--Purple-700)' : 'var(--Gray-100)')};
`;

export default ToggleBtn;
