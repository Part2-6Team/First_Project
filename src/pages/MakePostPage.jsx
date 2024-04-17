import React, { useState } from 'react';
import styled from 'styled-components';

import ToggleBtn from '../components/ToggleBtn';
import getBackgroundImageURL from '../api/getBackgroundImageURL';
import Option from '../components/OptionBox';
import GlobalNav from '../components/GlobalNav';
import Button from '../components/Button';

function PostPage() {
  const [toggleValue, setToggleValue] = useState('color');
  const color = ['beige', 'purple', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedImg, setSelectedImg] = useState(null);

  const onSelectColorHandle = (value) => {
    setSelectedColor(value);
  };

  const onSelectImgHandle = (value) => {
    setSelectedImg(value);
  };

  const onToggleHandle = (value) => {
    setToggleValue(value);
  };

  return (
    <>
      <GlobalNav hasButton={false} />
      <PostContainer>
        <InputContainer>
          <h2>To.</h2>
          <InputName
            placeholder="받는 사람 이름을 입력해 주세요"
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
        <Button
          className="submit"
          size={720}
          shape={56}
          disabled={!isFormValid}
        >
          생성하기
        </Button>
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
    padding: 12px 16px;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--Gray-300);
    font-color: var(--Gray-500);
    font-size: 16px;
    font-family: Pretendard;
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
        margin: 0px;
    }
    p {
        font-size: 16px;
        text-align: left;
        color: var(--Gray-500);
        margin-top: 4px;
    }
`;

export default PostPage;
