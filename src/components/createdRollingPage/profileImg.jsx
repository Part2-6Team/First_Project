import React from 'react';
import { styled } from 'styled-components';

function ProfileImg({ src, alt, border, translate }) {
  return (
    <StyledProfileImg
      src={src}
      alt={alt}
      $border={border}
      $translate={translate}
    />
  );
}

const StyledProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: ${({ $border }) => ($border ? '2px solid var(--White)' : 'none')};

  flex: 1;

  &:first-child {
    margin-left: 0;
  }
  margin-left: ${({ $translate }) => ($translate ? -10 : null)}px;
`;

export default ProfileImg;
