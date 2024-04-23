import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from './GlobalNav';
import ListPageComponent from './ListPageComponent';
import Button from './Button';
import device from '../config';

function Layout() {
  return (
    <div>
      <GlobalNav hasButton />
      <ListPageComponent />
      <ButtonSection>
        <a href="/post" className="postLinkButton">
          <Button className="readMore" size={280} shape={56}>
            나도 만들어보기
          </Button>
        </a>
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
  .postLinkButton {
    text-decoration-line: none;
  }

  @media ${device.tablet} {
    width: 720px;
    justify-content: space-between;
  }

  @media ${device.mobile} {
    width: 320px;
    justify-content: space-between;
  }
`;

export default Layout;
