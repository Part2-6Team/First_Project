import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import ToggleBtn from '../components/ToggleBtn';
import getBackgroundImageURL from '../api/getBackgroundImageURL';
import Option from '../components/OptionBox';
import GlobalNav from '../components/GlobalNav';
import Button from '../components/Button';
import ToInput from '../components/ToInputComponent';
import device from '../config';

function PostPage() {
  const [name, setName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [toggleValue, setToggleValue] = useState('color');
  const [items, setItems] = useState([]);
  const [loadingError, setLoadingError] = useState(null);
  const color = ['beige', 'purple', 'blue', 'green'];
  const [selectedColor, setSelectedColor] = useState(color[0]);
  const [selectedImg, setSelectedImg] = useState(null);

  const navigate = useNavigate();

  const onSelectColorHandle = (value) => {
    setSelectedColor(value);
  };

  const onSelectImgHandle = (value) => {
    setSelectedImg(value);
  };

  const onLoadHandle = async () => {
    let result;
    try {
      setLoadingError(null);
      result = await getBackgroundImageURL();
    } catch (error) {
      setLoadingError(error);
      return;
    }
    const { imageUrls } = result;
    setItems(imageUrls);
  };

  useEffect(() => {
    onLoadHandle();
  }, []);

  const onToggleHandle = (value) => {
    setToggleValue(value);
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    const data = {
      team: '5-6',
      name,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImg,
    };

    try {
      const response = await fetch(
        'https://rolling-api.vercel.app/5-6/recipients/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        const result = await response.json();
        navigate(`/post/${result.id}`);
      }
    } catch (error) {
      /* eslint-disable no-console */
      console.log(error);
    }
  };

  return (
    <>
      <GlobalNav hasButton={false} />
      <PostContainer>
        <Form onSubmit={onSubmitHandle}>
          <ToInput
            value={name}
            setValue={setName}
            touched={nameTouched}
            setTouched={setNameTouched}
            placeholder="받는 사람 이름을 입력해 주세요"
          />
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
          {loadingError && <div>에러가 발생했습니다.</div>}
          <Button
            className="submit"
            size={720}
            shape={56}
          >
            생성하기
          </Button>
        </Form>
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
  padding: 57px 0 35rem;

  @media ${device.mobile} {
    width: 320px;
  }
`;

const Form = styled.form`
  width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const SelectContainer = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-top: 50px;
  gap: 0.4rem;

  @media ${device.mobile} {
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
