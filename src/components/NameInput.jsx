import React from 'react';
import { styled } from 'styled-components';
import device from '../config';

function NameInput({ placeholder }) {
  return (
    <InputWrapper>
      <input className="nameInput" placeholder={placeholder} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  max-width: 720px;

  .nameInput {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--Gray-300);
    outline: none;
  }
`;

export default NameInput;
