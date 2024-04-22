import { useState } from 'react';

function removeHTMLTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

function useTextEditor({ handleChange, isNotEmpty }) {
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

  return {
    isValid,
    editorContent,
    handleChangeText,
    handleBlur,
    handleFocus,
  };
}

export default useTextEditor;
