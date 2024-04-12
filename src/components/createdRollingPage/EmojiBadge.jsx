import React from 'react';
import { styled } from 'styled-components';
import device from '../../config';

function EmojiBadge() {
  return (
    <Container>
      <StyledText>👍 24</StyledText>
    </Container>
  );
}

const Container = styled.div`
  padding: 8px 15px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);

  @media ${device.tablet} {
    padding: 8px 12px;
  }

  @media ${device.mobile} {
    padding: 4px 8px;
  }
`;

const StyledText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--White);

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export default EmojiBadge;
