import React from 'react';
import ReactQuill from 'react-quill';
import { styled } from 'styled-components';
import useTextEditor from '../hooks/useTextEditor';

// prettier-ignore
function TextEditor({ handleChange, isNotEmpty }) {
  const {
    isValid,
    editorContent,
    handleChangeText,
    handleBlur,
    handleFocus,
  } = useTextEditor({ handleChange, isNotEmpty });

  return (
    <QuillWrapper>
      <ReactQuill
        style={{ maxWidth: '720px', height: '260px', marginBottom: '50px' }}
        value={editorContent}
        onChange={handleChangeText}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {!isValid ? <p className="errorMessage">내용을 입력해 주세요</p> : null}
    </QuillWrapper>
  );
}

const QuillWrapper = styled.div`
  .errorMessage {
    color: var(--Error);
    font-family: Pretendard;
    font-size: 12px;
  }
`;

export default TextEditor;
