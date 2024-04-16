import React from 'react';
import ReactQuill from 'react-quill';

function TextEditor({ handleChange }) {
  const handleChangeText = (text) => {
    handleChange(text);
  };

  return (
    <div>
      <ReactQuill
        style={{ maxWidth: '720px', height: '260px', marginBottom: '50px' }}
        onChange={handleChangeText}
      />
    </div>
  );
}

export default TextEditor;
