import React, { useState } from 'react';
import ColorOption from './ColorOption';
import ImageOption from './ImageOption';
import styled from 'styled-components';

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
        {images.map((image) =>
          image.startsWith('http') ? (
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
          ),
        )}
      </OptionBox>
    );
}

const OptionBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1.2rem;
  margin-bottom: 69px;
    @media (min-width: 360px) and (max-width: 767px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 58px;
    }
`;

export default Option;