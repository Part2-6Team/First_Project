import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { styled } from 'styled-components';

function removeHTMLTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function TextEditor({ handleChange, isNotEmpty }) {
  const [isValid, setIsValid] = useState(true);
  const [editorContent, setEditorContent] = useState('');

  const handleChangeText = (text) => {
    const cleanText = removeHTMLTags(text);
    isNotEmpty(cleanText !== '');
    handleChange(text);
    setEditorContent(text);
  };

  const handleBlur = () => {
    if (editorContent === '') {
      setIsValid(false);
    }
  };

  const handleFocus = () => {
    setIsValid(true);
  };

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
