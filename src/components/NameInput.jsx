import React from 'react';
import { styled } from 'styled-components';
import useNameInput from '../hooks/useNameInput';

// prettier-ignore
function NameInput({ placeholder, handleChange }) {
  const { isValid, handleChangeInput, handleFocus, handleBlur } = useNameInput(handleChange);

  return (
    <InputWrapper>
      <input
        className={isValid ? 'nameInput' : 'nameInput invalid'}
        placeholder={placeholder}
        onChange={handleChangeInput}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {!isValid ? <p className="errorMessage">값을 입력해 주세요</p> : null}
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  max-width: 720px;

  .nameInput {
    width: 100%;
    height: 50px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--Gray-300);
    outline: none;
  }

  .nameInput.invalid {
    border: 1px solid var(--Error);
  }

  .errorMessage {
    color: var(--Error);
    font-family: Pretendard;
    font-size: 12px;
  }
`;

export default NameInput;
