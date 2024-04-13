import React from 'react';
import { styled } from 'styled-components';

const BUTTON_TEXT = {
  mainPage: '구경해보기',
  listPage: '나도 만들어보기',
  postPage: '생성하기',
};

function Button({ disabled, PageName }) {
  return (
    <ButtonStyled disabled={disabled}>{BUTTON_TEXT[PageName]}</ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 28rem;
  color: var(--White);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  padding: 1.4rem 2.4rem;
  background-color: ${(props) => {
    if (props.disabled) {
      return 'var(--Gray-300)';
    }
    return 'var(--Purple-600)';
  }};

  &:hover {
    background-color: ${(props) => !props.disabled && 'var(--Purple-700)'};
  }

  &:focus {
    border: ${(props) => !props.disabled && '2px solid var(--Purple-900)'}; 
    background-color: ${(props) => !props.disabled && 'var(--Purple-800)'};
  }

  &:active {
    background-color: ${(props) => !props.disabled && 'var(--Purple-800)'};
`;

export default Button;
