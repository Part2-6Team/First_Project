import React from 'react';
import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import ProfileSelect from '../components/ProfileSelect';
import FormLabel from '../components/FormLabel';
import DropDown from '../components/DropDown';
import { RELATIONS, FONTS } from '../constants/dropdownEnum';
import TextEditor from '../components/TextEditor';
import Button from '../components/Button';
import device from '../config';

function SendMessagePage() {
  return (
    <div>
      <GlobalNav hasButton={false} />
      <SendFormWrapper>
        <SendForm>
          <FormLabel>
            From.
            {/* 인풋 추가 예정 */}
          </FormLabel>
          <FormLabel>
            프로필 이미지
            <ProfileSelect />
          </FormLabel>
          <FormLabel>
            상대와의 관계
            <DropDown display={RELATIONS} />
          </FormLabel>
          <FormLabel>
            내용을 입력해 주세요
            <TextEditor />
          </FormLabel>
          <FormLabel>
            폰트
            <DropDown display={FONTS} />
          </FormLabel>
          <Button className="submit" size={720} type={56}>
            생성하기
          </Button>
        </SendForm>
      </SendFormWrapper>
    </div>
  );
}

const SendFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  padding: 0 24px;
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 720px;

  @media ${device.tablet} {
    .submit {
      width: calc(100vw - 48px);
    }
  }

  @media ${device.mobile} {
    width: calc(100vw - 48px);
  }
`;

export default SendMessagePage;
