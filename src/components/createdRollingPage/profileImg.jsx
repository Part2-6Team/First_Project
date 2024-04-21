import React from 'react';
import { styled } from 'styled-components';

function ProfileImg({ src, alt, border, translate, plusProfile }) {
  return (
    <ImgWrap>
      <StyledProfileImg
        src={src}
        alt={alt}
        $border={border}
        $translate={translate}
      />
      {plusProfile && <PlusProfile>{`+${plusProfile}`}</PlusProfile>}
    </ImgWrap>
  );
}

const ImgWrap = styled.div`
  position: relative;
`;

const StyledProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: ${({ $border }) => ($border ? '2px solid var(--White)' : 'none')};

  flex: 1;

  margin-left: ${({ $translate }) => ($translate ? -10 : null)}px;
`;

const PlusProfile = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-85%, -60%);
  color: #484848;
  font-size: 14px;
  font-weight: 500;
`;

export default ProfileImg;
