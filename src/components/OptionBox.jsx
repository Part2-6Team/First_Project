import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ColorOption from './ColorOption';
import ImageOption from './ImageOption';
import device from '../config';

function Option({ images, onSelectColor, onSelectImg, selectedColor }) {
  const [selectedImg, setSelectedImg] = useState('');
  const [userSelectedColor, setUserSelectedColor] = useState(selectedColor);

  const onSelectedImgHandle = (img) => {
    setSelectedImg(img);
  };

  const onSelectedColorHandle = (color) => {
    setUserSelectedColor(color);
  };

  return (
    <OptionBox>
      {images.map((image) => (image.startsWith('http') ? (
        <ImageOption
          key={image}
          img={image}
          onSelectImg={onSelectImg}
          isSelected={selectedImg === image}
          onSelectedImg={onSelectedImgHandle}
        />
      ) : (
        <ColorOption
          key={image}
          color={image}
          onSelectColor={onSelectColor}
          isSelected={userSelectedColor === image}
          onSelectedColor={onSelectedColorHandle}
        />
      )))}
    </OptionBox>
  );
}

const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 69px;
  margin-top: 45px;
  
  @media ${device.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 58px;
    gap: 12px;
  }
`;

Option.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  onSelectColor: PropTypes.func,
  onSelectImg: PropTypes.func,
  selectedColor: PropTypes.string,
};

Option.defaultProps = {
  images: [],
  onSelectColor: () => {},
  onSelectImg: () => {},
  selectedColor: 'beige',
};

export default Option;
