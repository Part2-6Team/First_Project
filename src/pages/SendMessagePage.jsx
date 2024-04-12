import { styled } from 'styled-components';
import GlobalNav from '../components/GlobalNav';
import ProfileSelect from '../components/ProfileSelect';
import FormLabel from '../components/FormLabel';
import DropDown from '../components/DropDown';
import { RELATIONS, FONTS } from '../constants/dropdownEnum';
import TextEditor from '../components/TextEditor';

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
          {/* 버튼 추가 예정 */}
        </SendForm>
      </SendFormWrapper>
    </div>
  );
}

const SendFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`;

const SendForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 720px;
`;

export default SendMessagePage;
