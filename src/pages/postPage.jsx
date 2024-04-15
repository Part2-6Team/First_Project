import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ToggleBtn from '../components/ToggleBtn';
import getBackgroundImageURL from '../api/getBackgroundImageURL';
import Option from '../components/OptionBox';

function PostPage () {
    const [toggleValue, setToggleValue] = useState('color');
    const color = ['beige', 'purple', 'blue', 'green'];
    const [selectedColor, setSelectedColor] = useState(color[0]);
    const [selectedImg, setSelectedImg] = useState(null);
    const [items, setItems] = useState([]);

    const onSelectColorHandle = (value) => {
        setSelectedColor(value);
    };
    
    const onSelectImgHandle = (value) => {
        setSelectedImg(value);
    };

    const onToggleHandle = (value) => {
        setToggleValue(value);
    };

    const onLoadHandle = async () => {
        let result;
        try {
          result = await getBackgroundImageURL();
        } catch (error) {
          return;
        }
        const { imageUrls } = result;
        setItems(imageUrls);
    };
    
    useEffect(() => {
        onLoadHandle();
    }, []);

    return (
        <>
            {/*헤더*/}
            <PostContainer>
                <InputContainer>
                    <h2>To.</h2>
                    <InputName
                        placeholder={'받는 사람 이름을 입력해 주세요'}
                    />
                </InputContainer>
                <SelectContainer>
                    <Explanation>
                        <h2>배경화면을 선택해 주세요.</h2>
                        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
                    </Explanation>
                    <ToggleBtn onToggle={onToggleHandle} toggleValue={toggleValue} />
                    {toggleValue === 'color' ? (
                        <Option
                        images={color}
                        onSelectColor={onSelectColorHandle}
                        onSelectImg={onSelectImgHandle}
                        />
                    ) : (
                        <Option
                        images={items}
                        onSelectColor={onSelectColorHandle}
                        onSelectImg={onSelectImgHandle}
                        selectedColor={selectedColor}
                        />
                    )}
                </SelectContainer>
                {/*버튼*/}
            </PostContainer>
        </>
    );
}

const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    inset: 0;
    padding: 5.7rem 0 35rem;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 720px;

    h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: -0.01em;
        text-align: left;
        font-family: Pretendard;
    }

    @media (max-width: 767px) {
        width: 320px;
    }
`;

const InputName = styled.input`
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--Gray-300);
    font-color: var(--Gray-500);
    font-size: 16px;
    letter-spacing: -0.01em;
    font-family: Pretendard;

    @media (max-width: 767px) {
        width: 320px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const SelectContainer = styled.div`
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 50px;
    gap: 0.4rem;

    @media (max-width: 767px) {
        width: 320px;
    }
`;

const Explanation = styled.div`
    font-family: Pretendard;
    h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.01em;
        margin: 0px;
    }
    p {
        font-size: 16px;
        letter-spacing: -0.01em;
        text-align: left;
        color: var(--Gray-500);
        margin-top: 4px;
    }
`;

export default PostPage;