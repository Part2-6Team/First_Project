import React, { useState } from 'react';
import { styled } from 'styled-components';

import Header from '../components/createdRollingPage/Header';
import Main from '../components/createdRollingPageEdit/Main';
import GlobalNav from '../components/GlobalNav';
import UrlCopyPhrases from '../components/createdRollingPage/UrlCopyPharases';
import device from '../config';

function CreatedRollingPageEdit() {
  const [isUrlSharedPharases, setIsUrlSharedPharases] = useState(false);

  const handleCopyClipBoard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  const onClickUrlShared = () => {
    setIsUrlSharedPharases(true);
    handleCopyClipBoard(window.location.href);

    setTimeout(() => {
      setIsUrlSharedPharases(false);
    }, 4000);
  };

  return (
    <Container>
      <GlobalNavWrap>
        <GlobalNav />
      </GlobalNavWrap>
      <Header
        handleOpenUrlShared={onClickUrlShared}
        isUrlSharedPharases={isUrlSharedPharases}
      />
      <Main />
      {isUrlSharedPharases && <UrlCopyPhrases />}
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 68px);
`;

const GlobalNavWrap = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

export default CreatedRollingPageEdit;
