import styled from 'styled-components';
import ToggleBtn from '../components/ToggleBtn';
import BackgroundOption from '../components/BackgroundOption';
import { useState } from 'react';

function PostPage () {
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
                    <ToggleBtn />
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

    h2 {
        font-size: 24px;
        font-weight: 700;
        line-height: 42px;
        letter-spacing: -0.01em;
        text-align: left;
        font-family: Pretendard;
    }
`;

const InputName = styled.input`
    width: 720px;
    padding: 1.2rem 1.6rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--Gray-300);
    font-color: var(--Gray-500);
    font-size: 16px;
    letter-spacing: -0.01em;
    font-family: Pretendard;
`;

const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 5rem;
    gap: 0.4rem;
`;

const Explanation = styled.div`
    margin-bottom: 2.4rem;
    font-family: Pretendard;
    h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.01em;
    }
    p {
        font-size: 16px;
        letter-spacing: -0.01em;
        text-align: left;
        color: var(--Gray-500);
    }
`;

export default PostPage;