import styled from 'styled-components';

function selectPadding(size) {
  if (size === 56) return 14;
  if (size === 40) return 8;
  if (size === 36) return 6;
  if (size === 28) return 2;
}

const OutlinedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: ${({ size = 40 }) => size}px;
  padding: ${({ size = 40 }) => selectPadding(size)}px
    ${({ isIconOnly = false }) => (isIconOnly ? 6 : 16)}px;
  border-radius: 6px;
  border: 1px solid var(--Gray-300);
  background: var(--White);
  color: var(--Black);

  &:disabled {
    background: var(--Gray-300);
    border: 1px solid var(--Gray-300);
    color: var(--White);
  }

  &:focus {
    border: 1px solid var(--Gray-500);
    background: var(--White);
  }

  &:hover,
  &:active {
    background: var(--Gray-100);
    border: 1px solid var(--Gray-300);
    outline: none;
  }
`;

export default OutlinedButton;
