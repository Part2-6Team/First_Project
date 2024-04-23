import { styled } from 'styled-components';

const Button = styled.button`
  width: ${({ size }) => size}px;
  color: var(--White);
  cursor: pointer;
  border: none;
  border-radius: ${({ shape }) => (shape === 56 ? '12px' : '6px')};
  padding: ${({ shape }) => (shape === 56 ? '14px 24px' : '7px 16px')};
  font-size: 18px;
  background-color: ${({ disabled }) => {
    if (disabled) {
      return 'var(--Gray-300)';
    }
    return 'var(--Purple-600)';
  }};

  &:hover {
    background-color: ${({ disabled }) => !disabled && 'var(--Purple-700)'};
  }

  &:focus {
    border: ${({ disabled }) => !disabled && '2px solid var(--Purple-900)'};
    background-color: ${({ disabled }) => !disabled && 'var(--Purple-800)'};
  }

  &:active {
    background-color: ${({ disabled }) => !disabled && 'var(--Purple-800)'};
  }

  @media (max-width: 1024px) {
    width: 72rem;
  }

  @media (max-width: 768px) {
    width: 32rem;
  }
`;

export default Button;
