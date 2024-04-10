/* eslint-disable import/prefer-default-export */
import React from 'react';
import { styled } from 'styled-components';

export const Header = () => {
  <HeaderStyled>
    <NavigationBar></NavigationBar>
  </HeaderStyled>;
};

const HeaderStyled = styled.div`
  width: 192rem;
  height: 64rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const NavigationBar = styled.div``;
