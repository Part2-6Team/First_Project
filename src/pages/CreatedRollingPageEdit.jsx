import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from '../components/createdRollingPage/Header';
import Main from '../components/createdRollingPageEdit/Main';
import GlobalNav from '../components/GlobalNav';
import UrlCopyPhrases from '../components/createdRollingPage/UrlCopyPharases';
import device from '../config';

import useRecipients from '../hooks/useRecipients';

function CreatedRollingPageEdit() {
  const { id } = useParams();
  const [isUrlSharedPharases, setIsUrlSharedPharases] = useState(false);
  const { recipients, isLoading } = useRecipients(id);

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

          {isUrlSharedPharases && <UrlCopyPhrases />}
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

export default CreatedRollingPageEdit;
