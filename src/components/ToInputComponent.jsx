import React from 'react';
import styled from 'styled-components';
import device from '../config';

function Toinput({ value, setValue, touched, setTouched, placeholder }) {
  const isValid = value.length > 0;

  const onBlurHandle = () => {
    if (!value) {
      setTouched(true);
    }
  };

  const onFocusHandle = () => {
    setTouched(false);
  };

  const onChangeHandle = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
  };

  return (
    <InputContainer>
      <h2>To.</h2>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        $isTouched={touched}
        $isValid={isValid}
      />
      <WarningText $isVisible={touched && !isValid}>
        값을 입력해 주세요
      </WarningText>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 12px;

  h2 {
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--Gray-300);
  font-color: var(--Gray-500);
  font-size: 16px;
  font-family: Pretendard;

  @media ${device.mobile} {
    width: 320px;
  }
`;

const WarningText = styled.div`
  color: var(--Error);
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;

export default Toinput;
