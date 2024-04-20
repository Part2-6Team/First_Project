/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import AddCard from './AddCard';
import Card from './Card';
import device from '../../config';
import getRequest from '../../api/getRequest';

function Main() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardList, setCardList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleToMoveEditPage = () => {
    navigate('edit');
  };

  return (
    <>
      <Container>
        <CardContainer>
          <EditBtnWithWeb onClick={handleToMoveEditPage}>
            수정하기
          </EditBtnWithWeb>
          <AddCard />
          {cardList?.map((card) => (
            <Card
              key={card.id}
              name={card.sender}
              relationship={card.relationship}
              comment={card.content}
              createdAt={card.createdAt}
            />
          ))}
        </CardContainer>
      </Container>
      <EditBtn onClick={handleToMoveEditPage}>수정하기</EditBtn>

      {/* 모달이 존재할때 카드 모달이 위치할 자리 */}
      <div id="observer" style={{ height: '10px' }} />
    </>
  );
}

const StyledBtn = styled.button`
  border-radius: 6px;
  background: var(--Purple-600);
  padding: 7px 17px;
  border: none;

  color: var(--White);
  font-size: 16px;
  font-weight: 400;
`;

const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-color: var(--Orange-200);
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  padding: 80px 0px 100px 0px;
  min-height: 100%;
  height: auto;

  // 모달이 존재할때는 50%로 어둡게 처리
  filter: brightness(100%);
`;

const EditBtnWithWeb = styled(StyledBtn)`
  position: absolute;
  top: -45px;
  right: 25px;
  cursor: pointer;

  margin-bottom: 11px;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
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

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 24px;
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

export default Main;
