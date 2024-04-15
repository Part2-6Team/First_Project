import { styled } from 'styled-components';

const Button = styled.button`
  width: ${({ size }) => size}px;
  color: var(--White);
  border: none;
  border-radius: ${({ type }) => (type === 56 ? '12px' : '6px')};
  padding: ${({ type }) => (type === 56 ? '14px 24px' : '7px 16px')};
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
`;

export default Button;
