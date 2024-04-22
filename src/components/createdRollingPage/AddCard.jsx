import React from 'react';
import { styled } from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import plusCardIcon from '../../assets/plusCardIcon.svg';
import device from '../../config';

function AddCard() {
  const { id } = useParams();
  return (
    <Container>
      <Link to={`/post/${id}/message`}>
        <PlusIconWrap>
          <PlusIcon src={plusCardIcon} alt="plusCardIcon" />
        </PlusIconWrap>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--White);
  min-width: 100%;
  height: 280px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 352px;
    height: 284px;
  }

  @media ${device.mobile} {
    width: 320px;
    height: 230px;
  }
`;

const PlusIconWrap = styled.div`
  background-color: var(--Gray-500);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 16px;
  cursor: pointer;
`;

const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default AddCard;
