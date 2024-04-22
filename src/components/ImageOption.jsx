/* 이미지 부분 수정 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Check from '../assets/check.png';
import 'react-loading-skeleton/dist/skeleton.css';
import device from '../config';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';

function ImageOption({ img, onSelectImg, isSelected, onSelectedImg }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => setLoading(false);

    return () => {
      image.onload = null;
    };
  }, [img]);

  const onClickImgHandle = (value) => {
    onSelectImg(value);
    onSelectedImg(value);
  };

  return (
    <SelectContainer onClick={() => onClickImgHandle(img)}>
      {loading ? (
        <BgImgWrapperSkeleton height={168} borderRadius={16} />
      ) : (
        <BgImgWrapper src={img} alt={img} />
      )}
      {isSelected && !loading && (
        <SelectedLayer>
          <img src={Check} alt="selectIcon" />
        </SelectedLayer>
      )}
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  position: relative;
  width: 168px;
  height: 168px;
  cursor: pointer;

  @media ${device.mobile} {
    width: 154px;
    height: 154px;
  }
`;

const BgImgWrapper = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const SelectedLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 44px;
    height: 44px;
  }
`;

const BgImgWrapperSkeleton = styled(Skeleton)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

ImageOption.propTypes = {
  img: PropTypes.string,
  onSelectImg: PropTypes.func,
  isSelected: PropTypes.bool,
  onSelectedImg: PropTypes.func,
};

ImageOption.defaultProps = {
  img: '',
  onSelectImg: () => {},
  isSelected: false,
  onSelectedImg: () => {},
};

export default ImageOption;
