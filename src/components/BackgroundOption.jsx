import React, { useState } from "react";
import styled from "styled-components";
import Option from "../components/option";

function backgroundOption ({ backgroundType, backgroundImage, onSelect }) {
    const [checkColor, setCheckColor] = useState({
        ...initialState,
        beige: true,
    });

    const handleColorCheck = (color) => {
        setCheckColor(() => ({
          ...initialState,
          [color]: true,
        }));
        onSelect('color', color);
    };

    const cards = [
        { key: 'beige', color: 'beige' },
        { key: 'purple', color: 'purple' },
        { key: 'blue', color: 'blue' },
        { key: 'green', color: 'green' },
    ];

    return (
        <OptionWrapper>
            <OptionContainer>
                {backgroundType === 'color'
                    ? cards.map((color) => (
                        <Option
                            key={color.key}
                            usage="option"
                            color={card.color}
                            onClick={() => handleColorCheck(card.color)}
                        />
                    ))
                    : backgroundImages['imageUrls'].map((img, idx) => (
                        <Option
                            key={idx}
                            usage="option"
                            cardUrl={img}
                            onClick={() => handleImgCheck(img)}
                        />
                ))}
            </OptionContainer>
        </OptionWrapper>
    );
}

const initialColorState = {
    beige: false,
    purple: false,
    blue: false,
    green: false,
};

const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const OptionContainer = styled.div`
    display: grid;
    align-items: flex-start;
    gap: 1.6rem;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default backgroundOption;