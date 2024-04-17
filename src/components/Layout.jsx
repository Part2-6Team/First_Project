import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from './GlobalNav';
import ListPage from './ListPage';
import Button from './Button';

function Layout() {
  return (
    <div>
      <GlobalNav hasButton />
      <ListPage />
      <ButtonSection>
        <Button PageName="listPage" />
      </ButtonSection>
    </div>
  );
}

const ButtonSection = styled.div`
  display: flex;
  width: 120rem;
  height: 10.4rem;
  padding: 2.4rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 4rem;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    width: 72rem;
  }

  @media (max-width: 768px) {
    width: 32rem;
  }
`;

export default Layout;
