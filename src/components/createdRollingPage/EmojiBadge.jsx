import React from 'react';
import { styled } from 'styled-components';

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
`;

const StyledText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--White);
`;

export default EmojiBadge;
