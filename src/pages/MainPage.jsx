import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import SiteInfo from '../components/SiteInfo';
import Button from '../components/Button';
import device from '../config';

function MainPage() {
  return (
    <div>
      <GlobalNav hasButton />
      <Content>
        <SiteInfoWrapper>
          <SiteInfo order={1} />
          <SiteInfo order={2} />
        </SiteInfoWrapper>
        <Button className="readMore" size={280} type={56}>
          구경해보기
        </Button>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  gap: 30px;

  @media ${device.pc_small} {
    .readMore {
      width: 90vw;
    }
  }
`;

const SiteInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default MainPage;
