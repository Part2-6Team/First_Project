import React, { useState } from 'react';
import styled from 'styled-components';
import ColorOption from './ColorOption';
import ImageOption from './ImageOption';

function Option({ images, onSelectColor, onSelectImage, selectedColor }) {
  const [selectedImage, setSelectedImage] = useState('');
  const [onSelectedColor, setOnSelectedColor] = useState(selectedColor);

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
  };

  const handleSelectedColor = (color) => {
    setOnSelectedColor(color);
  };

  return (
    <OptionBox>
      {images.map((image) => (image.startsWith('http') ? (
        <ImageOption
          key={image}
          img={image}
          onSelectImg={onSelectImage}
          isSelected={selectedImage === image}
          onSelectedImg={handleSelectedImage}
        />
      ) : (
        <ColorOption
          key={image}
          color={image}
          onSelectColor={onSelectColor}
          isSelected={onSelectedColor === image}
          onSelectedColor={handleSelectedColor}
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
  
  @media (min-width: 360px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 58px;
    gap: 12px;
  }
`;

export default Option;
