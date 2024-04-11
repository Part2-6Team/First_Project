import { styled } from 'styled-components';

export const Container = styled.main`
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  //   background-color: var(--Orange-200);
  padding: 80px 0;
  min-height: 100%;
  height: auto;
`;
