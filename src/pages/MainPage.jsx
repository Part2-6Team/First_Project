import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import SiteInfo from '../components/SiteInfo';

function MainPage() {
  return (
    <div>
      <GlobalNav hasButton />
      <Content>
        <SiteInfoWrapper>
          <SiteInfo order={1} />
          <SiteInfo order={2} />
        </SiteInfoWrapper>
        {/* "구경해보기 버튼" */}
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const SiteInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  gap: 30px;
`;

export default MainPage;
