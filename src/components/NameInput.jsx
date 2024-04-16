import React from 'react';
import { styled } from 'styled-components';

function NameInput({ placeholder, handleChange }) {
  const handleChangeInput = (event) => {
    handleChange(event.target.value);
  };

  return (
    <InputWrapper>
      <input
        className="nameInput"
        placeholder={placeholder}
        onChange={handleChangeInput}
      />
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
