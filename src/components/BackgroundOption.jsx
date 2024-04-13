import { useState, useEffect } from 'react';
import styled from 'styled-components';
import check from '../assets/check.png';

const BackgroundOption = () => {
    const [isSelected, setIsSelected] = useState([true, false, false, false]);
    const isColor = toggleState === '컬러';


};

/*
const 큰 상자 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.2rem;

    .각 칸 {
        width: 16.8rem;
        height: 16.8rem;
        border-radius: 1.6rem;
        border: 1px solid rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
    }
`;
*/

export default BackgroundOption;