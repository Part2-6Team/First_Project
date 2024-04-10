/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';
import { BUTTON_TEXT } from './constant';

export const Button = ({ disabled, PageName }) => {
  <ButtonStyled disabled={disabled}>{BUTTON_TEXT[PageName]}</ButtonStyled>;
};

const ButtonStyled = styled.div`
  color: var(--White);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 14px 24px;
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
