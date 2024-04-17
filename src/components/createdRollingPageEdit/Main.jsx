import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import device from '../../config';

import AddCard from '../createdRollingPage/AddCard';
import Card from '../createdRollingPage/Card';

function Main() {
  const navigate = useNavigate();

  const handleToEditComplete = () => {
    navigate('/post/:id');
  };

  return (
    <>
      <Container>
        <CardContainer>
          <BtnWrap>
            <StyledBtn>삭제하기</StyledBtn>
            <StyledBtn onClick={handleToEditComplete}>완료하기</StyledBtn>
          </BtnWrap>
          <AddCard />
          <Card edit />
          <Card edit />
          <Card edit />
          <Card edit />
          <Card edit />
          <Card edit />
          <Card edit />
          <Card edit />
        </CardContainer>
      </Container>

      <DeleteBtn>삭제하기</DeleteBtn>

      {/* Url을 카피했을 경우 UrlCopyPhrases가 위치할 자리 */}

      {/* 모달이 존재할때 카드 모달이 위치할 자리 */}
    </>
  );
}

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;

  padding: 80px 24px;
  min-height: 100%;
  height: auto;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: brightness(100%);
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 1184px;

  position: relative;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledBtn = styled.button`
  border-radius: 6px;
  background: var(--Purple-600);
  padding: 7px 17px;
  border: none;

  color: var(--White);
  font-size: 16px;
  font-weight: 400;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 20px;

  position: absolute;
  top: -47px;
  right: 25px;
`;

const DeleteBtn = styled(StyledBtn)`
  width: 720px;
  padding: 14px 0;

  position: fixed;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1025px) {
    display: none;
  }

  @media ${device.tablet} {
    display: block;
  }

  @media ${device.mobile} {
    display: block;
    padding: 14px 24px;
    width: 320px;
  }
`;

export default Main;
