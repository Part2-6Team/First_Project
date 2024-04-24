/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

import device from '../../config';
import getRequest from '../../api/getRequest';
import AddCard from '../createdRollingPage/AddCard';
import Card from '../createdRollingPage/Card';
import CardModal from '../createdRollingPage/CardModal';
import { Colors } from '../BackgroundColors';

function Main({ recipients }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCardModal, setIsCardModal] = useState(false);
  const [cardModalData, setCardModalData] = useState();

  const handleViewCardModal = async (cardId) => {
    if (isCardModal) {
      setIsCardModal(false);
      return;
    }
    const res = await getRequest(`messages/${cardId}/`);
    setIsCardModal(true);
    setCardModalData(res);
  };

  const handleCloseCardModal = () => {
    setIsCardModal(false);
  };

  const handleToEditComplete = () => {
    navigate(`/post/${id}`);
  };

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !isLoading) {
        setPage((prevPage) => prevPage + 1);
      }
    },
    [isLoading],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });
    // 최하단 요소를 관찰 대상으로 지정함
    const observerTarget = document.getElementById('observer');
    // 관찰 시작
    if (observerTarget) {
      observer.observe(observerTarget);
    }
  }, [handleObserver]);

  useEffect(() => {
    const getCardList = async () => {
      if (hasNext === null) return;

      setIsLoading(true);
      const response = await getRequest(
        `recipients/${id}/messages/?limit=2&offset=${offset}`,
      );

      setOffset((prev) => prev + 2);
      setHasNext(response.next);
      setCardList((prev) => [...prev, ...response.results]);
      setIsLoading(false);
    };

    getCardList();
  }, [page, id]);

  return (
    <>
      <Container
        $isCardModal={isCardModal}
        $backgroundColor={recipients?.backgroundColor}
        $img={recipients?.backgroundImageURL}
        onClick={handleCloseCardModal}
      >
        <CardContainer>
          <BtnWrap>
            <StyledBtn onClick={handleToEditComplete}>완료하기</StyledBtn>
          </BtnWrap>
          <AddCard />
          {cardList?.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.sender}
              relationship={card.relationship}
              comment={card.content}
              createdAt={card.createdAt}
              profileImg={card.profileImageURL}
              onClickCard={handleViewCardModal}
              edit
            />
          ))}
        </CardContainer>
      </Container>
      <EditBtn onClick={handleToEditComplete}>완료하기</EditBtn>

      {/* 모달이 존재할때 카드 모달이 위치할 자리 */}
      {isCardModal && <CardModal cardData={cardModalData} />}
      <div id="observer" style={{ height: '10px' }} />
    </>
  );
}

function filterBrightness(isCardModal) {
  return isCardModal ? 'brightness(50%)' : 'brightness(100%)';
}

const Container = styled.main`
  background-image: ${({ $img }) => ($img ? `url(${$img})` : 'none')};
  background: ${({ $backgroundColor }) => Colors($backgroundColor) || 'none'};
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;

  padding: 80px 24px;
  min-height: 100%;
  height: auto;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: ${({ $isCardModal }) => filterBrightness($isCardModal)};
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
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 20px;

  position: absolute;
  top: -47px;
  right: 25px;
`;

const EditBtn = styled(StyledBtn)`
  width: 720px;
  padding: 14px 0;
  cursor: pointer;

  position: fixed;
  bottom: 19px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1025px) {
    display: none;
  }
  
  @media ${device.mobile} {
    padding:14px; 24px;
    width: 320px;
  }
`;

export default Main;
