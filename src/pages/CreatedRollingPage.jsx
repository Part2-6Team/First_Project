import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';

import Header from '../components/createdRollingPage/Header';
import Main from '../components/createdRollingPage/Main';
import GlobalNav from '../components/GlobalNav';
import UrlCopyPharases from '../components/createdRollingPage/UrlCopyPharases';
import device from '../config';
import useRecipients from '../hooks/useRecipients';

function CreatedRolloingPage() {
  const { id } = useParams();
  const { recipients, isLoading } = useRecipients(id);
  const [isUrlSharedPharases, setIsUrlSharedPharases] = useState(false);

  const CopyClipBoard = async (text) => {
    await navigator.clipboard.writeText(text);
  };

  const onClickUrlShared = () => {
    setIsUrlSharedPharases(true);
    CopyClipBoard(window.location.href);

    setTimeout(() => {
      setIsUrlSharedPharases(false);
    }, 4000);
  };

  return (
    <Container>
      {!isLoading && recipients === 404 && <div>404</div>}
      {!isLoading && recipients !== 404 && (
        <>
          <GlobalNavWrap>
            <GlobalNav />
          </GlobalNavWrap>
          <Header
            recipients={recipients}
            handleOpenUrlShared={onClickUrlShared}
            isUrlSharedPharases={isUrlSharedPharases}
          />
          <Main />

          {isUrlSharedPharases && <UrlCopyPharases />}
        </>
      )}
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

export default CreatedRolloingPage;
