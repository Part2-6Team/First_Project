import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import ProfileSelect from '../components/ProfileSelect';
import FormLabel from '../components/FormLabel';
import DropDown from '../components/DropDown';
import { RELATIONS, FONTS } from '../constants/dropdownEnum';
import TextEditor from '../components/TextEditor';
import Button from '../components/Button';
import device from '../config';
import NameInput from '../components/NameInput';
import postMessage from '../api/postMessage';

function SendMessagePage() {
  const [senderName, setSenderName] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://i.ibb.co/zQGbzDz/image.png',
  );
  const [relation, setRelation] = useState('지인');
  const [message, setMessage] = useState('');
  const [messageValid, setMessageValid] = useState(false);
  const [font, setFont] = useState('Noto Sans');
  const [isFormValid, setIsFormVaild] = useState(false);

  const { id } = useParams();

  const sendingData = {
    recipientId: id,
    sender: senderName,
    profileImageURL: profileImage,
    relationship: relation,
    content: message,
    font,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postMessage(sendingData);
  };

  useEffect(() => {
    const handleFormValid = () => {
      if (senderName !== '' && messageValid !== false) {
        setIsFormVaild(true);
      } else {
        setIsFormVaild(false);
      }
    };
    handleFormValid();
  }, [senderName, messageValid]);

  return (
    <div>
      <GlobalNav hasButton={false} />
      <SendFormWrapper>
        <SendForm onSubmit={handleSubmit}>
          <FormLabel>
            From.
            <NameInput
              className="nameInput"
              placeholder="이름을 입력해 주세요."
              handleChange={setSenderName}
            />
          </FormLabel>
          <FormLabel>
            프로필 이미지
            <ProfileSelect handleChange={setProfileImage} />
          </FormLabel>
          <FormLabel>
            상대와의 관계
            <DropDown options={RELATIONS} handleChange={setRelation} />
          </FormLabel>
          <FormLabel>
            내용을 입력해 주세요
            <TextEditor
              handleChange={setMessage}
              isNotEmpty={setMessageValid}
            />
          </FormLabel>
          <FormLabel>
            폰트
            <DropDown options={FONTS} handleChange={setFont} />
          </FormLabel>
          <Button
            className="submit"
            size={720}
            shape={56}
            disabled={!isFormValid}
          >
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
