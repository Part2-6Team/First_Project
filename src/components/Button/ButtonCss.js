import { styled } from 'styled-components';

const ButtonStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 14px 24px;
  background: var(--Purple-600);
  
  &:hover {
    background: var(--Purple-700);
  }

  &:focus {
    border: 2px solid var(--Purple-900)
    background: var(--Purple-800);
  }

  &:active {
    background: var(--Purple-800);
  }
`;

export default ButtonStyled;
