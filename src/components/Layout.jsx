import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from './GlobalNav';
import ListPageComponent from './ListPageComponent';
import Button from './Button';

function Layout() {
  return (
    <div>
      <GlobalNav hasButton />
      <ListPageComponent />
      <ButtonSection>
        <Button PageName="listPage" />
      </ButtonSection>
    </div>
  );
}

const ButtonSection = styled.div`
  display: flex;
  width: 1200px;
  height: 104px;
  padding: 24px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 720px;
  }

  @media (max-width: 768px) {
    width: 320px;
  }
`;

export default Layout;
